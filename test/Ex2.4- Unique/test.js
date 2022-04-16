const assert = require("chai").assert;
const findUnique = require("../../Ex2.4- Unique/app");

describe("Ex2.4- Unique test", () => {
    it("Ex2.4- Unique tests", () => {
        assert.strictEqual(findUnique([1, 1, 1, 2, 1, 1]), 2);
        assert.strictEqual(findUnique([0, 0, 0.55, 0, 0]), 0.55);
        assert.strictEqual(findUnique([1, 0, 0, 0, 0]), 1);
        assert.strictEqual(findUnique([0, 0, 0, 0, 3]), 3);
    });
});
