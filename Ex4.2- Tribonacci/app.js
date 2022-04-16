/*
?Assumptions:
** signature array will always contain 3 numbers
** n will always be a non-negative number
*/

const tribonacci = (signatureArr, order) => {
    const tribonacciSeriesArr = [...signatureArr];
    let currNum;
    if (order === 0) {
        return [];
    }
    if (order === 1) {
        return signatureArr.slice(0, 1);
    }
    if (order === 2) {
        return signatureArr.slice(0, 2);
    }
    for (let i = 0; i < order - 3; i++) {
        currNum =
            tribonacciSeriesArr[i] +
            tribonacciSeriesArr[i + 1] +
            tribonacciSeriesArr[i + 2];
        tribonacciSeriesArr.push(currNum);
    }
    return tribonacciSeriesArr;
};

module.exports = tribonacci;
