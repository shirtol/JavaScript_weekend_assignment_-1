/*
The function gets a starting value (0 or 1) and an integer n (which is the order number of the element).
*/

// Runtime: O(2^n)
const fibonacci = (startVal, order) => {
    if (order === 1 || order === 0) {
        return startVal;
    }
    if (order === 2) {
        return 1;
    }
    return fibonacci(startVal, order - 1) + fibonacci(startVal, order - 2);
};

console.log(fibonacci(0, 5)); //3
console.log(fibonacci(0, 8)); //13
console.log(fibonacci(1, 5)); //5
console.log(fibonacci(1, 1)); //1
console.log(fibonacci(0, 1)); //0
console.log(fibonacci(0, 10)); //34

// Better performance (runtime: O(n))
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

console.log(fibonacciImproved(0, 5, {})); //3
console.log(fibonacciImproved(0, 8, {})); //13
console.log(fibonacciImproved(1, 5, {})); //5
console.log(fibonacciImproved(1, 1, {})); //1
console.log(fibonacciImproved(0, 1, {})); //0
console.log(fibonacciImproved(0, 10, {})); //34
