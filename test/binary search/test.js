const assert = require("chai").assert;
const binarySearch = require("../../binary search/app");

describe("binary search test", () => {
    const testArr = [1, 3, 5, 7, 8, 9];
    const testArr2 = [1, 3, 4];
    const testArr3 = [1, 3];
    it("binary search tests", () => {
        assert.strictEqual(binarySearch(testArr, 5), "Element found!");
        assert.strictEqual(binarySearch(testArr, 6), "Element not found!");
        assert.strictEqual(binarySearch(testArr, 9), "Element found!");
        assert.strictEqual(binarySearch(testArr2, 6), "Element not found!");
        assert.strictEqual(binarySearch(testArr2, 1), "Element found!");
        assert.strictEqual(binarySearch(testArr3, 6), "Element not found!");
        assert.strictEqual(binarySearch(testArr3, 1), "Element found!");
    });
});
