const basicOp = (operator, val1, val2) => {
    switch (operator) {
        case "+":
            return val1 + val2;
        case "-":
            return val1 - val2;
        case "*":
            return val1 * val2;
        case "/":
            return val1 / val2;
        default:
            return null;
    }
};

module.exports = basicOp;
