const assert = require("chai").assert;
const myMap1 = require("../../../Ex7- implement JS methods/mapFun");

describe("Ex7- implement JS methods: map test", () => {
    const testArr = [1, 2, 3, 4, 5];
    const resArr = [2, 4, 6, 8, 10];
    it("Ex7- implement JS methods: map tests", () => {
        assert.deepEqual(
            myMap1((el) => el * 2, testArr),
            resArr
        );
    });
});
