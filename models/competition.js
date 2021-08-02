"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Competition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Competition.belongsTo(models.User, { foreignKey: "UserId" });
      Competition.belongsTo(models.Challenge, { foreignKey: "ChallengeId" });
    }
  }
  Competition.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      UserId: DataTypes.INTEGER,
      ChallengeId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      winner: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Competition",
    }
  );
  return Competition;
};
