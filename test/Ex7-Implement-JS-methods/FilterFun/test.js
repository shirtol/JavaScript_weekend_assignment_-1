const assert = require("chai").assert;
const myFilter1 = require("../../../Ex7- implement JS methods/filterFun");

describe("Ex7- implement JS methods: filter test", () => {
    const testArr = [1, 2, 3, 4, 5, 6, 7, 8];
    it("Ex7- implement JS methods: filter tests", () => {
        assert.deepEqual(
            myFilter1((el) => el > 5, testArr),
            [6, 7, 8]
        );
        assert.notDeepInclude(
            myFilter1((el) => el !== 5, testArr),
            5
        );
        assert.isEmpty(myFilter1((_) => false, testArr));
        assert.deepEqual(
            myFilter1((el) => el > 4, []),
            []
        );
        assert.deepEqual(
            myFilter1((_) => true, testArr),
            testArr
        );
    });
});
