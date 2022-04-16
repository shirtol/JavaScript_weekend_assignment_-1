/*
Assumptions:
? string will never be empty.
? no need to account for different data types.
? Words in string are separate with one space.
*/

const getShortestWord = (str) => {
    const wordsArr = str.split(" ");
    let shortestWordLength = wordsArr[0].length;
    for (word of wordsArr) {
        if (word.length < shortestWordLength) {
            shortestWordLength = word.length;
        }
    }
    return shortestWordLength;
};

module.exports = getShortestWord;
