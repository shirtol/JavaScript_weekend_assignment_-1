const assert = require("chai").assert;
const trimStrEx = require("../../Ex5.1- trimming string/app");
const trimString = trimStrEx.trimString;
const trimStringWithSlice = trimStrEx.trimStringWithSlice;

describe("Trimming string exercise test", () => {
    it("testing for trimming string using for loop", () => {
        assert.strictEqual(trimString("shir"), "hi");
        assert.strictEqual(trimString("da"), "");
        assert.strictEqual(trimString("daniel"), "anie");
        assert.strictEqual(trimString("1234"), "23");
        assert.strictEqual(trimString("sssh"), "ss");
        assert.strictEqual(trimString("sbh"), "b");
    });
    it("testing for trimming string using slice", () => {
        assert.strictEqual(trimStringWithSlice("shir"), "hi");
        assert.strictEqual(trimStringWithSlice("da"), "");
        assert.strictEqual(trimStringWithSlice("daniel"), "anie");
        assert.strictEqual(trimStringWithSlice("1234"), "23");
        assert.strictEqual(trimStringWithSlice("sssh"), "ss");
        assert.strictEqual(trimStringWithSlice("sbh"), "b");
    });
});
