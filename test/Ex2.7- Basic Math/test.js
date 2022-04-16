const assert = require("chai").assert;
const basicOp = require("../../Ex2.7- Basic Math/app");

describe("Ex2.7- Basic Math test", () => {
    it("Ex2.7- Basic Math tests", () => {
        assert.strictEqual(basicOp("+", 4, 7), 11);
        assert.strictEqual(basicOp("-", 15, 18), -3);
        assert.strictEqual(basicOp("*", 5, 5), 25);
        assert.strictEqual(basicOp("/", 49, 7), 7);
        assert.strictEqual(basicOp("*", 0, 7), 0);
        assert.strictEqual(basicOp("*", 2, 1), 2);
        assert.strictEqual(basicOp("/", 2, 0), "Cannot divide by zero");
        assert.notStrictEqual(basicOp("/", 0, 1), "Cannot divide by zero");
    });
});
