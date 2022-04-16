/*
Assumptions:
? The passed in string will only consist of alphabetical characters and spaces(' ').
? Spaces will only be present if there are multiple words.
? Words will be separated by a single space(' ').
*/

const toWeirdCase = (string) => {
    let weirdCaseStr = "";
    const wordArr = string.split(" ");
    for (let i = 0; i < wordArr.length; i++) {
        for (let j = 0; j < wordArr[i].length; j++) {
            if (j % 2 === 0) {
                weirdCaseStr += wordArr[i][j].toUpperCase();
            } else {
                weirdCaseStr += wordArr[i][j].toLowerCase();
            }
        }
        if (i !== wordArr.length - 1) {
            weirdCaseStr += " ";
        }
    }
    return weirdCaseStr;
};

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));
console.log(toWeirdCase("STRING CASE"));

module.exports = toWeirdCase;
