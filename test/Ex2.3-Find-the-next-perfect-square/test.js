const assert = require("chai").assert;
const findNextSquare = require("../../Ex2.3- Find the next perfect square/app");

describe("Find the next perfect square test", () => {
    it("testing for Find the next perfect square", () => {
        assert.strictEqual(findNextSquare(121), 144);
        assert.strictEqual(findNextSquare(625), 676);
        assert.strictEqual(findNextSquare(114), -1);
    });
});
