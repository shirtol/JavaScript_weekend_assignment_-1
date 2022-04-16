const findUnique = (arr) => {
    const counts = {};
    for (num of arr) {
        num = num.toString();
        num in counts ? counts[num]++ : (counts[num] = 1);
    }

    let res =
        Object.values(counts)[0] === 1
            ? Object.keys(counts)[0]
            : Object.keys(counts)[1];
    return parseFloat(res);
};

console.log(findUnique([1, 1, 1, 2, 1, 1]));
console.log(findUnique([0, 0, 0.55, 0, 0]));
console.log(findUnique([1, 0, 0, 0, 0]));
console.log(findUnique([0, 0, 0, 0, 3]));
