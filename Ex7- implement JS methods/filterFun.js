const myFilter = (callback, array) => {
    const filteredArr = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filteredArr.push(array[i]);
        }
    }
    return filteredArr;
};

console.log(myFilter((el) => el > 5, [1, 2, 3, 4, 5, 6, 7, 8]));
