/*
Assumptions:
? The string contains only letters.
? Empty string is an isogram.
? Ignore letter case.
*/

const isIsogram = (str) => {
    let lowercaseStr = str.toLowerCase();
    const countsArr = [];
    for (let i = 0; i < lowercaseStr.length; i++) {
        if (countsArr.indexOf(lowercaseStr[i]) !== -1) {
            return false;
        }
        countsArr.push(lowercaseStr[i]);
    }
    return true;
};

module.exports = isIsogram;
