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

module.exports = findUnique;
