function wordSetting(wordLong, totalWords) {
  let result = [];
  let abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < totalWords; i++) {
    let letter = "";
    for (let j = 0; j < wordLong; j++) {
      letter += abjad[Math.floor(Math.random() * 26)];
    }
    result.push(letter);
  }

  return result;
}

function wordCheck(wordsBase, wordsInput) {
  let result = [];
  for (let i = 0; i < wordsBase.length; i++) {
    if (
      wordsInput[i] === "" ||
      wordsInput[i].length > wordsBase[i].length ||
      wordsInput[i].length === 1
    ) {
      result.push("Invalid Input");
    } else {
      let wordScan = "";
      let flag = false;
      for (let j = 0; j < wordsInput[i].length; j++) {
        let counter = 0;
        for (let k = 0; k < wordsBase[i].length; k++) {
          if (wordsBase[i][k] === wordsInput[i][j].toUpperCase()) {
            counter++;
            if (counter === 1) {
              flag = true;
              wordScan += wordsInput[i][j].toUpperCase();
            }
          }
        }
      }
      if (!flag) wordScan = "Invalid Input";
      result.push(wordScan);
    }
  }
  // console.log(result);

  // let wordsBaseArray = [];
  // let wordsInputArray = [];
  // let wordsBaseLetter = {};
  // let wordsInputLetter = {};

  // for (let i = 0; i < wordsBase.length; i++) {
  //   for (let j = 0; j < wordsBase[i].length; j++) {
  //     if (!wordsBaseLetter[i][j]) {
  //       wordsBaseLetter[i][j] = 1;
  //     }
  //     wordsBaseLetter[i[j]]++;
  //   }
  //   console.log(wordsBaseArray, "ini words base array");
  //   wordsBaseArray.push(wordsBaseLetter);
  // }

  // console.log("masuk?");

  for (let i = 0; i < result.length; i++) {
    if (
      result[i] !== "Invalid Input" &&
      result[i].length !== wordsInput[i].length
    ) {
      result[i] = "Invalid Input";
    }
  }
  // console.log(result, "ini result");

  return result;
}

function wordValue(wordResult) {
  // aturan point dari standar scrabble
  let point1 = "AEILNORSTU"; //AEILNORSTU // aeilnorstu
  let point2 = "DG"; // dg
  let point3 = "BCMP"; // bcmp
  let point4 = "FHVWY"; // fhvwy
  let point5 = "K"; //k
  let point8 = "JX"; // jx
  let point10 = "QZ"; //qz

  let result1 = [];
  let result2 = [];
  let result3 = [];
  let result4 = [];
  let result5 = [];
  let result8 = [];
  let result10 = [];

  for (let i = 0; i < wordResult.length; i++) {
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 = 0;
    let counter8 = 0;
    let counter10 = 0;

    for (let j = 0; j < wordResult[i].length; j++) {
      for (let k = 0; k < point1.length; k++) {
        if (wordResult[i][j] === point1[k]) {
          counter1++;
        }
      }
    }
    for (let j = 0; j < wordResult[i].length; j++) {
      for (let k = 0; k < point2.length; k++) {
        if (wordResult[i][j] === point2[k]) {
          counter2++;
        }
      }
    }
    for (let j = 0; j < wordResult[i].length; j++) {
      for (let k = 0; k < point3.length; k++) {
        if (wordResult[i][j] === point3[k]) {
          counter3++;
        }
      }
    }
    for (let j = 0; j < wordResult[i].length; j++) {
      for (let k = 0; k < point4.length; k++) {
        if (wordResult[i][j] === point4[k]) {
          counter4++;
        }
      }
    }
    for (let j = 0; j < wordResult[i].length; j++) {
      for (let k = 0; k < point5.length; k++) {
        if (wordResult[i][j] === point5[k]) {
          counter5++;
        }
      }
    }
    for (let j = 0; j < wordResult[i].length; j++) {
      for (let k = 0; k < point8.length; k++) {
        if (wordResult[i][j] === point8[k]) {
          counter8++;
        }
      }
    }
    for (let j = 0; j < wordResult[i].length; j++) {
      for (let k = 0; k < point10.length; k++) {
        if (wordResult[i][j] === point10[k]) {
          counter10++;
        }
      }
    }

    result1.push(counter1);
    result2.push(counter2);
    result3.push(counter3);
    result4.push(counter4);
    result5.push(counter5);
    result8.push(counter8);
    result10.push(counter10);
  }

  resultValue1 = result1.map((e) => e * 1);
  resultValue2 = result2.map((e) => e * 2);
  resultValue3 = result3.map((e) => e * 3);
  resultValue4 = result4.map((e) => e * 4);
  resultValue5 = result5.map((e) => e * 5);
  resultValue8 = result8.map((e) => e * 8);
  resultValue10 = result10.map((e) => e * 10);

  let totalWordValue = [];

  for (let i = 0; i < wordResult.length; i++) {
    let totalValue = 0;
    if (
      wordResult[i] !== "Invalid Input" &&
      wordResult[i] !== "Already Exists" &&
      wordResult[i] !== "Not Found"
    ) {
      totalValue =
        resultValue1[i] +
        resultValue2[i] +
        resultValue3[i] +
        resultValue4[i] +
        resultValue5[i] +
        resultValue8[i] +
        resultValue10[i];
    }
    totalWordValue.push(totalValue);
  }

  let score = 0;
  for (let i = 0; i < totalWordValue.length; i++) {
    score += totalWordValue[i];
  }

  // console.log({ result1, result2, result3, result4, result5, result8, result10 });
  // console.log({ resultValue1, resultValue2, resultValue3, resultValue4, resultValue5, resultValue8, resultValue10 });
  // console.log({ totalWordValue });
  return { totalWordValue, score };
}

// console.log(wordValue(["CAR", "TEACHER", "SHE"]));

// let wordsBase = wordSetting(10, 3);
// console.log(wordsBase);
// let wordsBaseData = ["AWAZRQHUFD", "TCGDNUTTYX", "QCAASRXOEE"];
// let wordsInput = ["AWA", "TT", "AS"];
// console.log(wordCheck(wordsBaseData, wordsInput));

module.exports = { wordSetting, wordCheck, wordValue };
