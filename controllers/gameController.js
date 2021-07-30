const { Game, Word } = require("../models/index");
const { wordSetting, wordValue } = require("../helpers/scrabble");
const { Op } = require("sequelize");

class GameController {
  static gameGet(req, res, next) {
    Game.findAll()
      .then((game) => {
        res.status(200).json(game);
      })
      .catch((err) => {
        next({ statusCode: 500 });
      });
  }
  static async gamePost(req, res, next) {
    try {
      let { ChallengeId } = req.body;
      let wordResult = [];
      console.log(req.wordAfterCheck, "ini word after check");
      console.log(req.wordJustResult, "ini wordJustResult");
      console.log(
        req.oxfordDictionary,
        "ini oxford dictionary<<<<<<<<<<<<<<<<<<<<<<<<<<"
      );

      if (req.oxfordDictionary) {
        req.oxfordDictionary.forEach((word, index) => {
          if (word.status === "rejected") {
            wordResult.push("Not Found");
          } else if (word.status === "fulfilled") {
            wordResult.push(word.value.data.word.toUpperCase());
          }
        });
      }

      for (let i = 0; i < req.wordAfterCheck.length; i++) {
        for (let j = 0; j < req.wordJustResult.length; j++) {
          console.log(
            req.wordAfterCheck[i],
            req.wordAfterCheck[j],
            "ini bandingkan"
          );
          if (req.wordAfterCheck[i] === req.wordJustResult[j]) {
            req.wordAfterCheck[i] = wordResult[j];
          }
        }
      }

      console.log(req.wordJustResult, "ini setelah di kondisi");
      console.log(req.wordAfterCheck, "ini setelaj h di if");
      // let wordNew = await Word.findAll({
      //   where: {
      //     word: wordOnlyResult,
      //   },
      // });
      // for (let i = 0; i < wordResult.length; i++) {
      //   for (let j = 0; j < wordNew.length; j++) {
      //     if (wordResult[i] === wordNew[j].word) {
      //       wordResult[i] = "Already Exists";
      //     }
      //   }
      // }

      // console.log(wordResult, "ini word result");
      let wordInputValue = wordValue(wordResult);

      let game = await Game.create({
        UserId: req.user.id,
        ChallengeId,
        score: wordInputValue.score,
      });

      let wordCreate = [];
      for (let i = 0; i < wordResult.length; i++) {
        wordCreate.push(
          await Word.create({
            UserId: req.user.id,
            ChallengeId,
            word: wordResult[i],
            score: wordInputValue.totalWordValue[i],
          })
        );
      }
      res.status(201).json({ score: wordInputValue, word: req.wordResult });
    } catch (err) {
      console.log(err, "ini error");
      if (
        err.name === "SequelizeUniqueConstraintError" ||
        err.name === "SequelizeValidationError"
      ) {
        err = err.errors.map((e) => e.message);
        res.status(400).json({ message: err });
      } else {
        next({ statusCode: 500 });
      }
    }
  }
}

module.exports = GameController;
