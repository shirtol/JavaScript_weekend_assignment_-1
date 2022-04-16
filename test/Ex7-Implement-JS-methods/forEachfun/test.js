const assert = require("chai").assert;
const myForEach1 = require("../../../Ex7- implement JS methods/forEachFun");

describe("Ex7- implement JS methods: forEach test", () => {
    const testArr = [1, 2, 3, 4];

    it("Ex7- implement JS methods: forEach test 1", () => {
        const someFun1 = (array) => {
            const newArr = [];
            myForEach1((element) => newArr.push(element + 2), array);
            return newArr;
        };

        assert.deepEqual(someFun1(testArr), [3, 4, 5, 6]);
    });
    it("Ex7- implement JS methods: forEach test 2", () => {
        const someFun1 = (array) => {
            const newArr = [];
            myForEach1((element) => newArr.push(element), array);
            return newArr;
        };

        assert.deepEqual(someFun1(testArr), testArr);
    });
});
