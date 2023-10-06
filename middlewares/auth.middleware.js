const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../configs/configs");

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization').slice(7);

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }
    req._id = user._id;
    next();
  });
}

module.exports = authenticateToken;
