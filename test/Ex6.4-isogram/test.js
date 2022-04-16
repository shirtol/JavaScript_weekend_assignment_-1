const assert = require("chai").assert;
const isIsogram = require("../../Ex6.4- isogram/app");

describe("isogram test", () => {
    it("isogram Ex. tests", () => {
        assert.strictEqual(isIsogram("Dermatoglyphics"), true);
        assert.strictEqual(isIsogram("aba"), false);
        assert.strictEqual(isIsogram(""), true);
    });
});
