const assert = require("chai").assert;
const nbYear = require("../../Ex3.1- growth of population/app");

describe("Ex3.1- growth of population test", () => {
    it("Ex3.1- growth of population tests", () => {
        assert.strictEqual(nbYear(1500, 5, 100, 5000), 15);
        assert.strictEqual(nbYear(1500, null, 100, 5000), 35);
        assert.strictEqual(
            nbYear(1500, null, -100, 5000),
            "We will never get to the desire population"
        );
        assert.strictEqual(
            nbYear(1500, 5, -100, 5000),
            "We will never get to the desire population"
        );
        assert.strictEqual(nbYear(1500000, 2.5, 10000, 2000000), 10);
    });
});
