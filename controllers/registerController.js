const { User } = require("../models");

class RegisterController {
  static registerPost(req, res, next) {
    const { email, password, fullName } = req.body;
    User.create({ email, password, name: fullName, role: "member", typeUser: "standard", money: 0 })
      .then((user) => {
        res.status(201).json({ id: user.id, email: user.email, fullName: user.name });
      })
      .catch((err) => {
        if (err.name === "SequelizeUniqueConstraintError" || err.name === "SequelizeValidationError") {
          err = err.errors.map((e) => e.message);
          next({ statusCode: 400, message: err });
        } else {
          next({ statusCode: 500 });
        }
      });
  }
}

module.exports = RegisterController;
