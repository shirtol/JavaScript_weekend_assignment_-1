const assert = require("chai").assert;
const summation = require("../../Ex2.5- Summation/app");

describe("Summation exercise test", () => {
    it("testing for summation", () => {
        assert.strictEqual(summation(2), 3);
        assert.strictEqual(summation(8), 36);
        assert.strictEqual(summation(1), 1);
    });
});
