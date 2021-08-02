function microsoftTranslator(req, res, next) {
  var axios = require("axios").default;

  var options = {
    method: "POST",
    url: "https://microsoft-translator-text.p.rapidapi.com/translate",
    params: { "api-version": "3.0", to: "id", textType: "plain", profanityAction: "NoAction" },
    headers: {
      "content-type": "application/json",
      "x-rapidapi-key": "7ff53537d2mshc56650bd4d1329dp1d1632jsn296a8d66c1cf",
      "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
    },
    data: [{ Text: "I would really like to drive your car around the block a few times." }],
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data[0].translations);
    })
    .catch(function (error) {
      console.error(error);
    });
}

module.exports = microsoftTranslator;
