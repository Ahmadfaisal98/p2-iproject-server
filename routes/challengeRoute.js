const ChallengeController = require("../controllers/challengeController");
const router = require("express").Router();

router.get("/", ChallengeController.challengeGet);
router.get("/:id", ChallengeController.challengeGetOne);

module.exports = router;
