const assert = require("chai").assert;
const sumOfTwoEx = require("../../Ex2.1- Sum of lowest numbers/app");
const sumTwoLowest = sumOfTwoEx.sumTwoLowest;
const sumTwoLowest2 = sumOfTwoEx.sumTwoLowest;
describe("Sum of lowest numbers test", () => {
    it("testing for sum of two lowest numbers O(n) tests", () => {
        assert.strictEqual(sumTwoLowest([19, 5, 42, 2, 77]), 7);
        assert.strictEqual(
            sumTwoLowest([10, 343445353, 3453445, 3453545353453]),
            3453455
        );
    });
    it("testing for sum of two lowest numbers O(nlogn) tests", () => {
        assert.strictEqual(sumTwoLowest2([19, 5, 42, 2, 77]), 7);
        assert.strictEqual(
            sumTwoLowest2([10, 343445353, 3453445, 3453545353453]),
            3453455
        );
    });
});
