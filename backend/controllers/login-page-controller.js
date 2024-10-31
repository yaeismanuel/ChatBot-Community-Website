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
          res.cookie('jwt', token, { httpOnly: true, maxAge: 60000 * 1000, sameSite: 'none' });
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
    bcrypt.genSalt(10, (error, salt) => {
      if (error) throw new Error(error);
      bcrypt.hash(newUserData.password, salt, async (err, hash) => {
        try {
          if (err) throw new Error(err);
          data.password = hash;
          const newUser = await userModel.create(newUserData);
          
          const token = await createToken(newUser.id);
          res.cookie('jwt', token, { httpOnly: true, maxAge: 60000 * 1000, sameSite: 'none' });
          res.json(resObject({ ...newUser, token }, true, 'Signed In.'));
        } catch (e) {
          res.status(500);
          console.log(e);
        }
      })
    })
  } catch (e) {
    res.status(500);
    console.log(e);
  }
}

module.exports = {
  login,
  signup
}