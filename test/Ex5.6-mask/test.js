const assert = require("chai").assert;
const maskify = require("../../Ex5.6- mask/app");

describe("maskify test", () => {
    it("testing for fixed tests", () => {
        assert.strictEqual(maskify("4556364607935616"), "############5616");
    });
});
