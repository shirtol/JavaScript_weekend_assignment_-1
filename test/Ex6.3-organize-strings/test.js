const assert = require("chai").assert;
const organizeStr = require("../../Ex6.3- organize strings/app");

describe("organize string test", () => {
    it("organize string Ex. tests", () => {
        assert.strictEqual(
            organizeStr("xyaabbbccccdefww", "xxxxyyyyabklmopq"),
            "abcdefklmopqwxy"
        );
        assert.strictEqual(
            organizeStr(
                "abcdefghijklmnopqrstuvwxyz",
                "abcdefghijklmnopqrstuvwxyz"
            ),
            "abcdefghijklmnopqrstuvwxyz"
        );
    });
});
