const assert = require("chai").assert;
const fibonacciEx = require("../../Ex4.1- Fibonacci/app");
const fibonacciWithLoop = fibonacciEx.fibonacciWithLoop;
const fibonacci = fibonacciEx.fibonacci;
const fibonacciImproved = fibonacciEx.fibonacciImproved;

describe("fibonacci tests", () => {
    it("fibonacci with loop", () => {
        assert.strictEqual(fibonacciWithLoop(0, 5), 3);
        assert.strictEqual(fibonacciWithLoop(0, 8), 13);
        assert.strictEqual(fibonacciWithLoop(1, 5), 5);
        assert.strictEqual(fibonacciWithLoop(1, 1), 1);
        assert.strictEqual(fibonacciWithLoop(0, 1), 0);
        assert.strictEqual(fibonacciWithLoop(0, 10), 34);
    });
    it("fibonacci recursive", () => {
        assert.strictEqual(fibonacci(0, 5), 3);
        assert.strictEqual(fibonacci(0, 8), 13);
        assert.strictEqual(fibonacci(1, 5), 5);
        assert.strictEqual(fibonacci(1, 1), 1);
        assert.strictEqual(fibonacci(0, 1), 0);
        assert.strictEqual(fibonacci(0, 10), 34);
    });
    it("fibonacci recursive memoized", () => {
        assert.strictEqual(fibonacciImproved(0, 5, {}), 3);
        assert.strictEqual(fibonacciImproved(0, 8, {}), 13);
        assert.strictEqual(fibonacciImproved(1, 5, {}), 5);
        assert.strictEqual(fibonacciImproved(1, 1, {}), 1);
        assert.strictEqual(fibonacciImproved(0, 1, {}), 0);
        assert.strictEqual(fibonacciImproved(0, 10, {}), 34);
    });
});