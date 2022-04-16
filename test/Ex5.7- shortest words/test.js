const assert = require("chai").assert;
const getShortestWord = require("../../Ex5.7- shortest words/app");

describe("Ex5.7- shortest words test", () => {
    it("Ex5.7- shortest words tests", () => {
        assert.strictEqual(getShortestWord("hi shir my name is daniel"), 2);
        assert.strictEqual(getShortestWord("I am going to the bank today"), 1);
        assert.strictEqual(
            getShortestWord("I'm currently enrolled at appleseeds academy"),
            2
        );
        assert.strictEqual(getShortestWord("Shalalalalala"), 13);
    });
});
