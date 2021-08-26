const jwt = require("jsonwebtoken");
const formatResponse = require("../helpers/serverResponse");
const { key } = require("../../config/jwtKey");
const User = require("../models/User");

exports.allowAccess = function (roles) {
  return async function (req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .send(formatResponse(null, "Token not found", null));
      }
      const { id: userId, role: userRole } = jwt.verify(token, key);
      const allowAccess = roles.includes(userRole);
      const currentUser = await User.findById(userId);
      if (!currentUser) {
        return res
          .status(401)
          .send(formatResponse(null, "User not found", null));
      }
      if (!allowAccess) {
        return res
          .status(403)
          .send(formatResponse(null, "User have no access", null));
      }
      req.user = currentUser;
      next();
    } catch (err) {
      return res.status(401).send(formatResponse(null, err, null));
    }
  };
};
