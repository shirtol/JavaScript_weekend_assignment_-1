const convertBinaryToInt = (binaryArr) => {
    let intValue = 0;
    for (let i = binaryArr.length - 1; i >= 0; i--) {
        intValue += binaryArr[i] * 2 ** (binaryArr.length - 1 - i);
    }
    return intValue;
};

const testing1 = [0, 0, 0, 1];
const testing2 = [0, 0, 1, 0];
const testing3 = [0, 1, 0, 1];
const testing4 = [1, 0, 0, 1];
const testing5 = [0, 0, 1, 0];
const testing6 = [0, 1, 1, 0];
const testing7 = [1, 1, 1, 1];
const testing8 = [1, 0, 1, 1];

console.log(convertBinaryToInt(testing1));
console.log(convertBinaryToInt(testing2));
console.log(convertBinaryToInt(testing3));
console.log(convertBinaryToInt(testing4));
console.log(convertBinaryToInt(testing5));
console.log(convertBinaryToInt(testing6));
console.log(convertBinaryToInt(testing7));
console.log(convertBinaryToInt(testing8));

module.exports = convertBinaryToInt;

//TODO: Using forEach:
const convertBinaryToInt2 = (binaryArr) => {};
