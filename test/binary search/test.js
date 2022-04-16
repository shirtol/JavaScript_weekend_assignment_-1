const assert = require("chai").assert;
const binarySearch = require("../../binary search/app");

describe("binary search test", () => {
    it("binary search tests", () => {
        assert.strictEqual(
            binarySearch([1, 3, 5, 7, 8, 9], 5),
            "Element found!"
        );
        assert.strictEqual(
            binarySearch([1, 3, 5, 7, 8, 9], 6),
            "Element not found!"
        );
        assert.strictEqual(
            binarySearch([1, 3, 5, 7, 8, 9], 9),
            "Element found!"
        );
        assert.strictEqual(binarySearch([1, 3, 4], 6), "Element not found!");
        assert.strictEqual(binarySearch([1, 3, 4], 1), "Element found!");
        assert.strictEqual(binarySearch([1, 3], 6), "Element not found!");
        assert.strictEqual(binarySearch([1, 3], 1), "Element found!");
    });
});
