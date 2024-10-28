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
          res.json(resObject({ error: { server: true }}, false, e.message));
        };
        
        if (isCorrect) {
          const token = await createToken(userData.id);
          console.log('token', token);
          res.cookie('jwt', token, { httpOnly: true, maxAge: 60000 * 1000, sameSite: 'none' });
          res.json(resObject({ ...userData, token }, true, 'Logged In.'));
        } else {
          res.json(resObject({ error: { password: true }}, false, e.message));
        }
      })
    } else {
      res.json(resObject({ error: { username: true }}, false, e.message));
    }
  } catch (e) {
    console.log(e);
    res.json(resObject({ error: { network: true }}, false, e.message));
  }
}

const signup = async (req, res) => {
  try {
    const data = {
      id: await genId(),
      name: 'Juan Tamad',
      username: 'juantamad',
      password: '123',
      role: 'member'
    }
    bcrypt.genSalt(10, (error, salt) => {
      if (error) throw new Error(error);
      bcrypt.hash(data.password, salt, async (err, hash) => {
        try {
          if (err) throw new Error(err);
          data.password = hash;
          const newUser = await userModel.create(data);
          console.log(newUser);
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