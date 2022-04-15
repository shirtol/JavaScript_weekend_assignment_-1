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

console.log(getShortestWord("hi shir my name is daniel"));
console.log(getShortestWord("I am going to the bank today"));
console.log(getShortestWord("I'm currently enrolled at appleseeds academy"));
console.log(getShortestWord("Shalalalalala"));
