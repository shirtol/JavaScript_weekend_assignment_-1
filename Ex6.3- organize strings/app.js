/*
Assumptions:
? str1 and str2 including only letters from a to z.
*/

const organizeStr = (str1, str2) => {
    const distinctLettersArr = [];
    getDistinctLettersArr(str1, distinctLettersArr);
    getDistinctLettersArr(str2, distinctLettersArr);
    return distinctLettersArr.sort().join("");
};

const getDistinctLettersArr = (str, distinctLettersArr) => {
    let lowercaseStr = str.toLowerCase();
    for (let i = 0; i < lowercaseStr.length; i++) {
        if (distinctLettersArr.indexOf(lowercaseStr[i]) === -1) {
            distinctLettersArr.push(lowercaseStr[i]);
        }
    }
};

module.exports = organizeStr;
