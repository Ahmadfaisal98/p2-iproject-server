const router = require("express").Router();
const loginRouter = require("../routes/loginRouter");
const registerRouter = require("../routes/registerRouter");
const loginGoogle = require("../routes/loginGoogle");
const challengeRoute = require("../routes/challengeRoute");
const gameRoute = require("../routes/gameRoute");
const apiRoute = require("../routes/apiRoute");

const { authentication } = require("../middlewares/auth");
const errorHandler = require("../middlewares/errorHandler");

router.use("/login", loginRouter);
router.use("/register", registerRouter);
router.use("/loginGoogle", loginGoogle);
router.use("/", apiRoute);

router.use(authentication);

router.use("/games", gameRoute);
router.use("/challenges", challengeRoute);

module.exports = router;

router.use(errorHandler);
