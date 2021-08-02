"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Challenge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Challenge.belongsToMany(models.User, { through: models.Competition, foreignKey: "ChallengeId" });
      Challenge.belongsToMany(models.User, { through: models.Game, foreignKey: "ChallengeId" });
      Challenge.belongsToMany(models.User, { through: models.Word, foreignKey: "ChallengeId" });
    }
  }
  Challenge.init(
    {
      name: DataTypes.STRING,
      wordLong: DataTypes.INTEGER,
      totalWords: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Challenge",
    }
  );
  return Challenge;
};
