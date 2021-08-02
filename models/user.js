"use strict";
const { passwordHash } = require("../helpers/passwordBcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Challenge, { through: models.Competition, foreignKey: "UserId" });
      User.belongsToMany(models.Challenge, { through: models.Game, foreignKey: "UserId" });
      User.belongsToMany(models.Challenge, { through: models.Word, foreignKey: "UserId" });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Email cannot be empty",
          },
          isEmail: {
            msg: "Should be email type",
          },
          notNull: {
            msg: "email cannot be null",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password cannot be empty",
          },
          isLength(password) {
            if (password.length < 5) {
              throw new Error("Password should be minimal 5 characters");
            }
          },
          notNull: {
            msg: "password cannot be null",
          },
        },
      },
      phoneNumber: DataTypes.STRING,
      typeUser: DataTypes.STRING,
      role: DataTypes.STRING,
      money: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((instance, options) => {
    instance.password = passwordHash(instance.password);
  });
  User.beforeUpdate((instance, options) => {
    instance.password = passwordHash(instance.password);
  });
  return User;
};
