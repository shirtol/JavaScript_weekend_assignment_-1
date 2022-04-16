const assert = require("chai").assert;
const summation = require("../../Ex2.5- Summation/app");

describe("Ex2.5- Summation test", () => {
    it("Ex2.5- Summation tests", () => {
        assert.strictEqual(summation(2), 3);
        assert.strictEqual(summation(8), 36);
        assert.strictEqual(summation(1), 1);
    });
});
