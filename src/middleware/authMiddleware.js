const formatResponse = require("../helpers/serverResponse");
const jwt = require("jsonwebtoken");
const { key } = require("../../config/jwtKey");

exports.allowAccess = function (roles) {
  return function (req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        throw {
          name: "Token not found",
          message: "User is not authorized",
        };
      }
      const { role: userRole } = jwt.verify(token, key);
      let allowAccess = false;
      roles.forEach((role) => {
        if (role === userRole) {
          allowAccess = true;
        }
      });
      if (!allowAccess) {
        throw {
          name: "User have no access",
          message: "User is not authorized to view this data",
        };
      }
      next();
    } catch (err) {
      return res
        .status(401)
        .send(formatResponse(null, err, "Authorization error"));
    }
  };
};
