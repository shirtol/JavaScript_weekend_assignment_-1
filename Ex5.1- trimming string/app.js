/*
Assumptions:
The string length is equal or greater than 2.
*/

// With loop:
const trimString = (string) => {
    let trimmedString = "";
    for (let i = 1; i < string.length - 1; i++) {
        trimmedString += string[i];
    }
    return trimmedString;
};

// With slice:
const trimStringWithSlice = (string) =>
    string
        .split("")
        .slice(1, string.length - 1)
        .join("");

module.exports = {
    trimString,
    trimStringWithSlice,
};
