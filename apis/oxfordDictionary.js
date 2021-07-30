// Prototype account is limited to 60 request per minute and 1,000 requests per month.
// Version 1 will be remain live until 30 June 2019. Any applications using v1 after this date will not work.
// If you want to continue developing using the Oxford Dictionaries API you will need to update your plan and code to use v2 before 30 June 2019.

const axios = require("axios");
const { wordCheck } = require("../helpers/scrabble");

function oxfordDictionary(req, res, next) {
  let { wordInput, wordBase } = req.body;
  let words = wordCheck(wordBase, wordInput);
  req.wordAfterCheck = words;

  let wordJustResult = [];
  words.forEach((word) => {
    if (word !== "Invalid Input") {
      wordJustResult.push(word);
    }
  });

  console.log("masuk sini?");
  if (!wordJustResult.length) {
    next();
  }
  req.wordJustResult = wordJustResult;

  // const fields = "pronunciations";
  const strictMatch = "true";
  const app_id = process.env.OXFORD_DICTIONARY_ID; //process.env.OXFORD_DICTIONARY_ID
  const app_key = process.env.OXFORD_DICTIONARY_KEY; //process.env.OXFORD_DICTIONARY_KEY

  let promises = [];
  wordJustResult.forEach((word) => {
    promises.push(
      axios({
        url:
          "https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/" +
          word.toLowerCase() +
          "?strictMatch=" +
          strictMatch,
        port: "443",
        method: "GET",
        headers: {
          app_id: app_id,
          app_key: app_key,
        },
      })
    );
  });
  Promise.allSettled(promises).then((responses) => {
    req.oxfordDictionary = responses;
    console.log(req.oxfordDictionary);
    next();
  });
}

// oxfordDictionary(["BOOK", "tabeee", "item"]);

module.exports = oxfordDictionary;
