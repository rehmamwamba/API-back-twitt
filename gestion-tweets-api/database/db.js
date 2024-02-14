const expressJwt = require('express-jwt');
const authMiddleware = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  credentialsRequired: false,
});

module.exports = authMiddleware;
