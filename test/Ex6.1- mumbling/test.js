const assert = require("chai").assert;
const accum = require("../../Ex6.1- mumbling/app");

describe("Ex6.1- mumbling test", () => {
    it("Ex6.1- mumbling tests", () => {
        assert.strictEqual(accum("abcd"), "A-Bb-Ccc-Dddd");
        assert.strictEqual(
            accum("RqaEzty"),
            "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
        );
        assert.strictEqual(accum("cwAt"), "C-Ww-Aaa-Tttt");
    });
});
