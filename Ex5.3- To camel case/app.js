/* Works for all the cases (includes dashes or underscore at the beginning 
or at the end) */
const toCamelCase = (str) => {
    let camelCaseStr = str.charAt(0);
    for (let i = 1; i < str.length - 1; i++) {
        if (str.charAt(i) === "-" || str.charAt(i) === "_") {
            camelCaseStr += str.charAt(i + 1).toUpperCase();
            i++;
        } else {
            camelCaseStr += str.charAt(i);
        }
    }
    camelCaseStr += str.charAt(str.length - 1);
    return camelCaseStr;
};

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth_Warrior-"));
console.log(toCamelCase("-The_Stealth_Warrior-"));

/* Using array of words: works only when the input is valid (doesn't include dash or underscore at the 
beginning or at the end of the string) */
const toCamelCase2 = (str) => {
    let wordsArr = [];
    let camelCaseStr = "";
    if (str.includes("-", 1)) {
        wordsArr = str.split("-");
    } else if (str.includes("_", 1)) {
        wordsArr = str.split("_");
    }
    camelCaseStr += wordsArr[0];
    for (let i = 1; i < wordsArr.length; i++) {
        camelCaseStr +=
            wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1);
    }
    return camelCaseStr;
};

console.log(toCamelCase2("The_Stealth_Warrior"));
console.log(toCamelCase2("the-stealth-warrior"));
