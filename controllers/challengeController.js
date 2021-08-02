const { Challenge } = require("../models/index");
const { wordSetting } = require("../helpers/scrabble");

class ChallengeController {
  static challengeGet(req, res, next) {
    Challenge.findAll()
      .then((challenge) => {
        res.status(200).json(challenge);
      })
      .catch((err) => {
        next({ statusCode: 500 });
      });
  }
  static challengeGetOne(req, res, next) {
    req.challenge = req.params.id;
    console.log(req.params.id);
    Challenge.findByPk(req.params.id)
      .then((challenge) => {
        console.log(challenge);
        if (challenge) {
          const wordChallenge = wordSetting(challenge.wordLong, challenge.totalWords);
          res.status(200).json(wordChallenge);
        } else {
          next({ statusCode: 404 });
        }
      })
      .catch((err) => {
        next({ statusCode: 500 });
      });
  }
}

module.exports = ChallengeController;
