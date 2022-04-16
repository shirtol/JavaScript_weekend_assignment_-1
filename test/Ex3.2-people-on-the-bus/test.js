const assert = require("chai").assert;
const numOfPeopleInBus = require("../../Ex3.2- People on the bus/app");

describe("People on the bus exercise test", () => {
    it("testing for people on the bus", () => {
        assert.strictEqual(
            numOfPeopleInBus([
                [2, 0],
                [3, 2],
                [4, 5],
            ]),
            2
        );
        assert.strictEqual(
            numOfPeopleInBus([
                [5, 0],
                [1, 7],
                [1, 1],
            ]),
            "invalid input"
        );
        assert.strictEqual(
            numOfPeopleInBus([
                [0, 0],
                [0, 0],
                [0, 0],
            ]),
            0
        );
        assert.strictEqual(
            numOfPeopleInBus([
                [5, 0],
                [3, 2],
                [2, 8],
            ]),
            0
        );
    });
});
