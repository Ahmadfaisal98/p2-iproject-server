const router = require("express").Router();
const ApiController = require("../controllers/apiController");
const grammerCheck = require("../apis/grammerCheck");

router.post("/grammerCheck", grammerCheck, ApiController.grammerCheck);

module.exports = router;
