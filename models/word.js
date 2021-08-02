"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Word.belongsTo(models.User, { foreignKey: "UserId" });
      Word.belongsTo(models.Challenge, { foreignKey: "ChallengeId" });
    }
  }
  Word.init(
    {
      UserId: DataTypes.INTEGER,
      ChallengeId: DataTypes.INTEGER,
      word: DataTypes.STRING,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Word",
    }
  );
  return Word;
};
