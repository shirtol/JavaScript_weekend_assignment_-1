const assert = require("chai").assert;
const maskify = require("../../Ex5.6- mask/app");

describe("Ex5.6- mask test", () => {
    it("Ex5.6- mask tests", () => {
        assert.strictEqual(maskify("4556364607935616"), "############5616");
        assert.strictEqual(maskify("64607935616"), "#######5616");
        assert.strictEqual(maskify("1"), "1");
        assert.strictEqual(maskify(""), "");
        assert.strictEqual(maskify("Skippy"), "##ippy");
        assert.strictEqual(
            maskify("Nananananananananananananananana Batman!"),
            "####################################man!"
        );
    });
});
