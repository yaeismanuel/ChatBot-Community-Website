const bcrypt = require('bcryptjs');
const userModel = require('../database/models/user');
const resObject = require('../configs/response');

const genId = async () => {
  const users = await userModel.find({});
  return users.length + 1;
}

(async () => {
  userModel.deleteMany().then(d => console.log(d))
})

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
      bcrypt.compare(password, found.password, (err, isCorrect) => {
        if (err) {
          console.log(err);
          res.json(resObject(null, false, err.message));
        };
        if (isCorrect) {
          res.json(resObject(userData, true, 'Logged In.'));
        } else {
          res.json(resObject(null, false, 'Wrong password.'));
        }
      })
    } else {
      res.json(resObject(null, false, 'User not found.'));
    }
  } catch (e) {
    console.log(e);
    res.json(resObject(null, false, err.message));
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