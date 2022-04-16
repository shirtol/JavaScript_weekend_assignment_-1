const assert = require("chai").assert;
const toCamelCaseEx = require("../../Ex5.3- To camel case/app");
const toCamelCase = toCamelCaseEx.toCamelCase;
const toCamelCase2 = toCamelCaseEx.toCamelCase2;

describe("Ex5.3- To camel case test", () => {
    it("Ex5.3- To camel case1 tests", () => {
        assert.strictEqual(
            toCamelCase("The_Stealth_Warrior"),
            "TheStealthWarrior"
        );
        assert.strictEqual(
            toCamelCase("the-stealth-warrior"),
            "theStealthWarrior"
        );
        assert.strictEqual(
            toCamelCase("thestealthwarrior"),
            "thestealthwarrior"
        );
        assert.strictEqual(
            toCamelCase("Thestealthwarrior"),
            "Thestealthwarrior"
        );
    });
    it("Ex5.3- To camel case2 tests", () => {
        assert.strictEqual(
            toCamelCase2("The_Stealth_Warrior"),
            "TheStealthWarrior"
        );
        assert.strictEqual(
            toCamelCase2("the-stealth-warrior"),
            "theStealthWarrior"
        );
        assert.strictEqual(
            toCamelCase2("thestealthwarrior"),
            "thestealthwarrior"
        );
        assert.strictEqual(
            toCamelCase2("Thestealthwarrior"),
            "Thestealthwarrior"
        );
    });
});
