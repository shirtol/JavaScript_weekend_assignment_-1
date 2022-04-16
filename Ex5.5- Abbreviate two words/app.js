/*
Assumptions:
? The input is string and contains only 2 words with one space in between them
*/

const abbreviateName = (str) => {
    const splitedStr = str.split(" ");
    return (
        splitedStr[0][0].toUpperCase() + "." + splitedStr[1][0].toUpperCase()
    );
};

module.exports = abbreviateName;
