const assert = require("chai").assert;
const myForEach1 = require("../../../Ex7- implement JS methods/forEachFun");

describe("forEach test", () => {
    const testArr = [1, 2, 3, 4];
    const someFun1 = (array) => {
        const newArr = [];
        myForEach1((element) => newArr.push(element + 2), array);
        return newArr;
    };

    it("testing for forEach", () => {
        assert.deepEqual(someFun1(testArr), [3, 4, 5, 6]);
    });
});
