const assert = require("chai").assert;
const tribonacci = require("../../Ex4.2- Tribonacci/app");

describe("Ex4.2- Tribonacci test", () => {
    const startArr1 = [1, 1, 1];
    const startArr2 = [0, 0, 1];
    const startArr3 = [1, 2, 3];
    it("Ex4.2- Tribonacci tests", () => {
        assert.deepEqual(tribonacci(startArr1, 5), [1, 1, 1, 3, 5]);
        assert.deepEqual(tribonacci(startArr1, 8), [1, 1, 1, 3, 5, 9, 17, 31]);
        assert.deepEqual(tribonacci(startArr2, 8), [0, 0, 1, 1, 2, 4, 7, 13]);
        assert.deepEqual(tribonacci(startArr3, 6), [1, 2, 3, 6, 11, 20]);
        assert.deepEqual(tribonacci(startArr3, 0), []);
        assert.deepEqual(tribonacci(startArr3, 1), [1]);
        assert.deepEqual(tribonacci(startArr3, 2), [1, 2]);
    });
});
