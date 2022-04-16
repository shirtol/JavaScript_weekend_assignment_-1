const assert = require("chai").assert;
const peopleOnTheBusEx = require("../../Ex3.2- People on the bus/app");
const numOfPeopleInBus = peopleOnTheBusEx.numOfPeopleInBus;
const numOfPeopleInBus2 = peopleOnTheBusEx.numOfPeopleInBus2;

describe("People on the bus exercise test", () => {
    const arrForTest1 = [
        [2, 0],
        [3, 2],
        [4, 5],
    ];
    const arrForTest2 = [
        [5, 0],
        [1, 7],
        [1, 1],
    ];
    const arrForTest3 = [
        [0, 0],
        [0, 0],
        [0, 0],
    ];
    const arrForTest4 = [
        [5, 0],
        [3, 2],
        [2, 8],
    ];
    it("testing for people on the bus", () => {
        assert.strictEqual(numOfPeopleInBus(arrForTest1), 2);
        assert.strictEqual(numOfPeopleInBus(arrForTest2), "invalid input");
        assert.strictEqual(numOfPeopleInBus(arrForTest3), 0);
        assert.strictEqual(numOfPeopleInBus(arrForTest4), 0);
    });
    it("testing for people on the bus using forEach", () => {
        assert.strictEqual(numOfPeopleInBus2(arrForTest1), 2);
        assert.strictEqual(numOfPeopleInBus2(arrForTest2), "invalid input");
        assert.strictEqual(numOfPeopleInBus2(arrForTest3), 0);
        assert.strictEqual(numOfPeopleInBus2(arrForTest4), 0);
    });
});
