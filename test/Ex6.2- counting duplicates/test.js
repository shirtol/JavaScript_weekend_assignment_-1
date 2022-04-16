const assert = require("chai").assert;
const getNumOfDuplicates = require("../../Ex6.2- counting duplicates/app");

describe("Ex6.2- counting duplicates test", () => {
    it("Ex6.2- counting duplicates tests", () => {
        assert.strictEqual(getNumOfDuplicates("abcde"), 0);
        assert.strictEqual(getNumOfDuplicates("aabbcde"), 2);
        assert.strictEqual(getNumOfDuplicates("aabBcde"), 2);
        assert.strictEqual(getNumOfDuplicates("indivisibility"), 1);
        assert.strictEqual(getNumOfDuplicates("Indivisibilities"), 2);
        assert.strictEqual(getNumOfDuplicates("aA11"), 2);
        assert.strictEqual(getNumOfDuplicates("ABBA"), 2);
        assert.strictEqual(getNumOfDuplicates(""), 0);
        assert.strictEqual(getNumOfDuplicates("a"), 0);
    });
});
