/*
Assumptions:
? The input string contains only alphabets (both uppercase and lowercase) and numeric digits.
*/

const getNumOfDuplicates = (str) => {
    let lowerCaseStr = str.toLowerCase();
    const letterCounts = {};
    let counts = 0;
    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr[i] in letterCounts) {
            letterCounts[lowerCaseStr[i]]++;
        } else {
            letterCounts[lowerCaseStr[i]] = 1;
        }
    }
    for (const char in letterCounts) {
        if (letterCounts[char] > 1) {
            counts++;
        }
    }
    return counts;
};

console.log(getNumOfDuplicates("abcde"));
console.log(getNumOfDuplicates("aabbcde"));
console.log(getNumOfDuplicates("aabBcde"));
console.log(getNumOfDuplicates("indivisibility"));
console.log(getNumOfDuplicates("Indivisibilities"));
console.log(getNumOfDuplicates("aA11"));
console.log(getNumOfDuplicates("ABBA"));
