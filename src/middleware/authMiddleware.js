const formatResponse = require("../helpers/serverResponse");
const jwt = require("jsonwebtoken");
const { key } = require("../../config/jwtKey");

exports.allowAccess = function (roles) {
  return function (req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .send(
            formatResponse(null, "Token not found", "User is not authorized")
          );
      }
      const { role: userRole } = jwt.verify(token, key);
      const allowAccess = roles.includes(userRole);
      if (!allowAccess) {
        return res
          .status(401)
          .send(
            formatResponse(
              null,
              "User have no access",
              "User is not authorized to view this data"
            )
          );
      }
      next();
    } catch (err) {
      return res
        .status(401)
        .send(formatResponse(null, err, "Authorization error"));
    }
  };
};
