const bcrypt = require("bcryptjs");

exports.passwordHash = (password) => {
  const hashedPassword = bcrypt.hashSync(password, 7);
  return hashedPassword;
};

exports.validatePassword = (password, hash) => {
  const isValid = bcrypt.compareSync(password, hash);
  return isValid;
};
