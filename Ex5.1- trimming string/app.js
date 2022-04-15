/*
Assumptions:
The string length is equal or greater than 2.
*/

// With loop:
const trimString = (string) => {
    let trimmedString = "";
    for (let i = 1; i < string.length - 1; i++) {
        trimmedString += string.charAt(i);
    }
    return trimmedString;
};

console.log(trimString("shir"));
console.log(trimString("da"));
console.log(trimString("daniel"));
console.log(trimString("1234"));
console.log(trimString("sssh"));
console.log(trimString("sbh"));

// With slice:
const trimStringWithSlice = (string) =>
    string
        .split("")
        .slice(1, string.length - 1)
        .join("");

console.log(trimStringWithSlice("shir"));
console.log(trimStringWithSlice("da"));
console.log(trimStringWithSlice("daniel"));
console.log(trimStringWithSlice("1234"));
console.log(trimStringWithSlice("sssh"));
console.log(trimStringWithSlice("sbh"));
