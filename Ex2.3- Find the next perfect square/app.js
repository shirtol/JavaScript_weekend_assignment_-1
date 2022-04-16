const findNextSquare = (num) => {
    let numSqrt = Math.sqrt(num);
    return numSqrt === Math.floor(numSqrt) ? (numSqrt + 1) ** 2 : -1;
};

module.exports = findNextSquare;
