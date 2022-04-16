const convertBinaryToInt = (binaryArr) => {
    let intValue = 0;
    for (let i = binaryArr.length - 1; i >= 0; i--) {
        intValue += binaryArr[i] * 2 ** (binaryArr.length - 1 - i);
    }
    return intValue;
};

const convertBinaryToInt2 = (binaryArr) => {
    let intVal = 0;
    binaryArr
        .slice()
        .reverse()
        .forEach((element, idx) => {
            intVal += element * 2 ** idx;
        });
    return intVal;
};

module.exports = {
    convertBinaryToInt: convertBinaryToInt,
    convertBinaryToInt2: convertBinaryToInt2,
};
