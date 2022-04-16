const repeatStr = (counts, string) => {
    let repeatedStr = "";
    for (let i = 0; i < counts; i++) {
        repeatedStr += string;
    }
    return repeatedStr;
};

module.exports = repeatStr;
