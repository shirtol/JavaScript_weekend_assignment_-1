const assert = require("chai").assert;
const oneAndZeroEx = require("../../Ex2.2- One and Zero - binary/app");
const convertBinaryToInt = oneAndZeroEx.convertBinaryToInt;
const convertBinaryToInt2 = oneAndZeroEx.convertBinaryToInt2;

describe("Ex2.2- One and Zero - binary test", () => {
    it("testing for One and zero binary tests", () => {
        assert.strictEqual(convertBinaryToInt([0, 0, 0, 1]), 1);
        assert.strictEqual(convertBinaryToInt([0, 0, 1, 0]), 2);
        assert.strictEqual(convertBinaryToInt([0, 1, 0, 1]), 5);
        assert.strictEqual(convertBinaryToInt([1, 0, 0, 1]), 9);
        assert.strictEqual(convertBinaryToInt([0, 0, 1, 0]), 2);
        assert.strictEqual(convertBinaryToInt([0, 1, 1, 0]), 6);
        assert.strictEqual(convertBinaryToInt([1, 1, 1, 1]), 15);
        assert.strictEqual(convertBinaryToInt([1, 0, 1, 1]), 11);
    });
    it("Ex2.2- One and Zero - binary using forEach tests", () => {
        assert.strictEqual(convertBinaryToInt2([0, 0, 0, 1]), 1);
        assert.strictEqual(convertBinaryToInt2([0, 0, 1, 0]), 2);
        assert.strictEqual(convertBinaryToInt2([0, 1, 0, 1]), 5);
        assert.strictEqual(convertBinaryToInt2([1, 0, 0, 1]), 9);
        assert.strictEqual(convertBinaryToInt2([0, 0, 1, 0]), 2);
        assert.strictEqual(convertBinaryToInt2([0, 1, 1, 0]), 6);
        assert.strictEqual(convertBinaryToInt2([1, 1, 1, 1]), 15);
        assert.strictEqual(convertBinaryToInt2([1, 0, 1, 1]), 11);
    });
});
