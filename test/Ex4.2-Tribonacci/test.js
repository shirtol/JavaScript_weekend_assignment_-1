const assert = require("chai").assert;
const tribonacci = require("../../Ex4.2- Tribonacci/app");

describe("Tribonacci test", () => {
    it("Tribonacci ex. testa", () => {
        assert.deepEqual(tribonacci([1, 1, 1], 5), [1, 1, 1, 3, 5]);
        assert.deepEqual(tribonacci([1, 1, 1], 8), [1, 1, 1, 3, 5, 9, 17, 31]);
        assert.deepEqual(tribonacci([0, 0, 1], 8), [0, 0, 1, 1, 2, 4, 7, 13]);
        assert.deepEqual(tribonacci([1, 2, 3], 6), [1, 2, 3, 6, 11, 20]);
        assert.deepEqual(tribonacci([1, 2, 3], 0), []);
        assert.deepEqual(tribonacci([1, 2, 3], 1), [1]);
        assert.deepEqual(tribonacci([1, 2, 3], 2), [1, 2]);
    });
});
