const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../database/models/user');
const resObject = require('../configs/response');

const expiration = 12 * 60 * 60;
const secret = process.env.SYSTEM_SECRET_KEY;

const genId = async () => {
  const users = await userModel.find({});
  return users.length + 1;
}
const createToken = (id) => {
  return jwt.sign({id}, secret, { expiresIn: expiration });
}

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const found = await userModel.findOne({ username: username });
    if (found) {
      const userData = {
        id: found.id,
        name: found.name,
        username: found.username,
        role: found.role,
      }
      bcrypt.compare(password, found.password, async (err, isCorrect) => {
        if (err) {
          console.log(err);
          res.json(resObject({ server: true }, false, e.message));
        };
        
        if (isCorrect) {
          const token = await createToken(userData.id);
          res.cookie('jwt', token, { httpOnly: true, maxAge: expiration * 1000, sameSite: 'none' });
          res.json(resObject({ ...userData, token }, true, 'Logged In.'));
        } else {
          res.json(resObject({ password: true }, false));
        }
      })
    } else {
      res.json(resObject({ username: true }, false));
    }
  } catch (e) {
    console.log(e);
    res.json(resObject({ network: true }, false, e.message));
  }
}

const signup = async (req, res) => {
  try {
    const newUserData = req.body;
    newUserData.id = await genId();
    newUserData.role = 'Member';
    newUserData.liked = [];
    
    if (!newUserData.name || !newUserData.username || !newUserData.password) return res.json(resObject(null, false, 'Name, username, and password are mandatory.'));
    
    if (await userModel.findOne({ username: newUserData.username })) return res.json(resObject({ username: true }, false, 'Username already taken.'));
    
    bcrypt.genSalt(10, (error, salt) => {
      if (error) throw new Error(error);
      bcrypt.hash(newUserData.password, salt, async (err, hash) => {
        try {
          if (err) throw new Error(err);
          newUserData.password = hash;
          console.log(newUserData);
          const newUser = await userModel.create(newUserData);
          
          const userData = {
            id: newUser.id,
            name: newUser.name,
            username: newUser.username,
            role: newUser.role,
          }
          
          const token = await createToken(newUser.id);
          res.cookie('jwt', token, { httpOnly: true, maxAge: expiration * 1000, sameSite: 'none' });
          res.json(resObject({ ...userData, token }, true, 'Signed In.'));
        } catch (e) {
          console.log(e);
          res.json(resObject({ server: true }, false, e.message));
        }
      })
    })
  } catch (e) {
    console.log(e);
    res.json(resObject({ server: true }, false, e.message));
  }
}

module.exports = {
  login,
  signup
}