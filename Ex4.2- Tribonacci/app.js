const tribonacci = (signatureArr, order) => {
    const tribonacciSeriesArr = [...signatureArr];
    let currNum;
    for (let i = 0; i < order - 3; i++) {
        currNum =
            tribonacciSeriesArr[i] +
            tribonacciSeriesArr[i + 1] +
            tribonacciSeriesArr[i + 2];
        tribonacciSeriesArr.push(currNum);
    }
    return tribonacciSeriesArr;
};

console.log(tribonacci([1, 1, 1], 5));
console.log(tribonacci([1, 1, 1], 8));
console.log(tribonacci([0, 0, 1], 8));
console.log(tribonacci([1, 2, 3], 6));
