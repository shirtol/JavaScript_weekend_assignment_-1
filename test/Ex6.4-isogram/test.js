const assert = require("chai").assert;
const isIsogram = require("../../Ex6.4- isogram/app");

describe("Ex6.4- isogram test", () => {
    it("Ex6.4- isogram tests", () => {
        assert.strictEqual(isIsogram("Dermatoglyphics"), true);
        assert.strictEqual(isIsogram("aba"), false);
        assert.strictEqual(isIsogram(""), true);
    });
});
