const findNextSquare = (num) => {
    let numSqrt = Math.sqrt(num);
    return numSqrt === Math.floor(numSqrt) ? (numSqrt + 1) ** 2 : -1;
};

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
