const assert = require("chai").assert;
const centuryFromYear = require("../../Ex2.6- Years and Centuries/app");

describe("Ex2.6- Years and Centuries test", () => {
    it("Ex2.6- Years and Centuries tests", () => {
        assert.strictEqual(centuryFromYear(1705), 18);
        assert.strictEqual(centuryFromYear(1900), 19);
        assert.strictEqual(centuryFromYear(1601), 17);
        assert.strictEqual(centuryFromYear(2000), 20);
    });
});
