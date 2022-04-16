const assert = require("chai").assert;
const displayYesOrNo = require("../../Ex1.1- Yes or No/app");

describe("Ex1.1- Yes or No test", () => {
    it("Ex1.1- Yes or No tests", () => {
        assert.strictEqual(displayYesOrNo(5 > 2), "Yes");
        assert.strictEqual(displayYesOrNo(5 < 2), "No");
    });
});
