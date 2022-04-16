const repeatStr = (counts, string) => {
    let repeatedStr = "";
    for (let i = 0; i < counts; i++) {
        repeatedStr += string;
    }
    return repeatedStr;
};

console.log(repeatStr(6, "|"));
console.log(repeatStr(5, "Hello"));
console.log(repeatStr(0, "Hello"));
console.log(repeatStr(1, "Hello"));

module.exports = repeatStr;
