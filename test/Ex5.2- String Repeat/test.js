const assert = require("chai").assert;
const repeatStr = require("../../Ex5.2- String Repeat/app");

describe("Ex5.2- String Repeat test", () => {
    it("Ex5.2- String Repeat tests", () => {
        assert.strictEqual(repeatStr(6, "|"), "||||||");
        assert.strictEqual(repeatStr(5, "Hello"), "HelloHelloHelloHelloHello");
        assert.strictEqual(repeatStr(0, "Hello"), "");
        assert.strictEqual(repeatStr(1, "Hello"), "Hello");
    });
});
