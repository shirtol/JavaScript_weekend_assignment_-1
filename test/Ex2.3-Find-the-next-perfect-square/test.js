const assert = require("chai").assert;
const findNextSquare = require("../../Ex2.3- Find the next perfect square/app");

describe("Ex2.3- Find the next perfect square test", () => {
    it("Ex2.3- Find the next perfect square tests", () => {
        assert.strictEqual(findNextSquare(121), 144);
        assert.strictEqual(findNextSquare(625), 676);
        assert.strictEqual(findNextSquare(114), -1);
        assert.strictEqual(findNextSquare(1), 4);
        assert.strictEqual(findNextSquare(144), 169);
        assert.strictEqual(findNextSquare(169), 196);
    });
});
