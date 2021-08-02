const axios = require("axios");

function grammerCheck(req, res, next) {
  axios({
    url: "https://dnaber-languagetool.p.rapidapi.com/v2/check",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "x-rapidapi-key": process.env.GRAMMER_CHECK_KEY,
      "x-rapidapi-host": "dnaber-languagetool.p.rapidapi.com",
    },
    method: "POST",
    params: {
      text: req.body.textInput,
      language: "en-US",
    },
  })
    .then(({ data }) => {
      req.grammerCheck = data;
      next();
    })
    .catch((err) => {
      next({ statusCode: 500 });
    });
}

module.exports = grammerCheck;
