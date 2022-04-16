/*
Assumptions:
? Input contains only dashes or underscore between words.
*/

/*First option:*/
const toCamelCase = (str) => {
    let camelCaseStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "-" || str[i] === "_") {
            camelCaseStr += str[i + 1].toUpperCase();
            i++;
        } else {
            camelCaseStr += str[i];
        }
    }
    return camelCaseStr;
};

/* Using array of words: */
const toCamelCase2 = (str) => {
    let wordsArr = [];
    let camelCaseStr = "";
    if (str.includes("-")) {
        wordsArr = str.split("-");
    } else if (str.includes("_")) {
        wordsArr = str.split("_");
    }
    camelCaseStr += wordsArr[0];
    for (let i = 1; i < wordsArr.length; i++) {
        camelCaseStr += wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
    }
    return camelCaseStr;
};

module.exports = {
    toCamelCase,
    toCamelCase2,
};
