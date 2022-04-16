/*
I think that the examples have a mistake:
(example number 2): accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy",
I think it should be: accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy",
according to the other examples and the first 2 letters of this example.
*/

const accum = (str) => {
    const charsArr = str.split("");
    const accumArr = [];

    charsArr.forEach((char, idx) => {
        let currChar = char.toUpperCase();
        for (let i = 0; i < idx; i++) {
            currChar += char.toLowerCase();
        }
        accumArr.push(currChar);
    });

    return accumArr.join("-");
};

module.exports = accum;
