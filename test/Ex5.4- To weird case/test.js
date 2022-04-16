const assert = require("chai").assert;
const toWeirdCase = require("../../Ex5.4- To weird case/app");

describe("Ex5.4- To weird case test", () => {
    it("Ex5.4- To weird case tests", () => {
        assert.strictEqual(toWeirdCase("String"), "StRiNg");
        assert.strictEqual(
            toWeirdCase("Weird string case"),
            "WeIrD StRiNg CaSe"
        );
        assert.strictEqual(toWeirdCase("STRING CASE"), "StRiNg CaSe");
    });
});
