const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

function passwordHash(password) {
  return bcrypt.hashSync(password, salt);
}

function comparePassword(passwordInput, passwordDB) {
  return bcrypt.compareSync(passwordInput, passwordDB);
}

module.exports = {
  passwordHash,
  comparePassword,
};
