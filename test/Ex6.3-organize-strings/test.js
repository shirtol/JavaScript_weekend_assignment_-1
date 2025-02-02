const assert = require("chai").assert;
const organizeStr = require("../../Ex6.3- organize strings/app");

describe("Ex6.3- organize strings test", () => {
    it("Ex6.3- organize strings tests", () => {
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
        assert.strictEqual(organizeStr("abc", "def"), "abcdef");
        assert.strictEqual(organizeStr("abc", "abc"), "abc");
        assert.strictEqual(organizeStr("", "abc"), "abc");
        assert.strictEqual(organizeStr("abc", ""), "abc");
        assert.strictEqual(organizeStr("", ""), "");
    });
});
