const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authentication.split(' ')[1];
    jwt.verify(token, process.env.SYSTEM_SECRET_KEY, (err, verifiedToken) => {
      if (verifiedToken) res.locals.userId = verifiedToken.id;
      next();
    })
  } catch (e) {
    console.log(e.message, 'at authentication middleware');
    next();
  }
}

module.exports = authenticate