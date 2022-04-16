/*
The function gets a starting value (0 or 1) and an integer n (which is the order number of the element).
*/

// Runtime complexity: O(n). Better performance than the other solutions (performance test results for the 200th element: 0.282ms).
const fibonacciWithLoop = (startVal, order) => {
    const seriesArr = [startVal, 1];
    for (let i = 0; i < order - 2; i++) {
        seriesArr.push(seriesArr[i] + seriesArr[i + 1]);
    }
    return seriesArr[order - 1];
};

// Runtime complexity: O(2^n). (performance test results for the 200th element: > 15min)
const fibonacci = (startVal, order) => {
    if (order === 1 || order === 0) {
        return startVal;
    }
    if (order === 2) {
        return 1;
    }
    return fibonacci(startVal, order - 1) + fibonacci(startVal, order - 2);
};

// Better performance (Runtime complexity: O(n)). (performance test results for the 200th element: 0.586ms)
const fibonacciImproved = (startVal, order, memoObj) => {
    if (order === 1 || order === 0) {
        memoObj[order] = startVal;
    }
    if (order === 2) {
        memoObj[order] = 1;
    }
    if (order.toString() in memoObj) {
        return memoObj[order];
    }
    memoObj[order] =
        fibonacciImproved(startVal, order - 1, memoObj) +
        fibonacciImproved(startVal, order - 2, memoObj);
    return memoObj[order];
};

module.exports = {
    fibonacciWithLoop: fibonacciWithLoop,
    fibonacci: fibonacci,
    fibonacciImproved: fibonacciImproved,
};
