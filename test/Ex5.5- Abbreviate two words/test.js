const assert = require("chai").assert;
const abbreviateName = require("../../Ex5.5- Abbreviate two words/app");

describe("Ex5.5- Abbreviate two words test", () => {
    it("Ex5.5- Abbreviate two words tests", () => {
        assert.strictEqual(abbreviateName("Sam Harris"), "S.H");
        assert.strictEqual(abbreviateName("Patrick Feeney"), "P.F");
        assert.strictEqual(abbreviateName("shir toledano"), "S.T");
    });
});
