const assert = require("chai").assert;
const myFilter1 = require("../../../Ex7- implement JS methods/filterFun");

describe("filter test", () => {
    const testArr = [1, 2, 3, 4, 5, 6, 7, 8];
    const resArr = [6, 7, 8];
    it("testing for filter tests", () => {
        assert.deepEqual(
            myFilter1((el) => el > 5, testArr),
            resArr
        );
    });
});
