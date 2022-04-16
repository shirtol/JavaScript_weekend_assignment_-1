// First approach: Extension method for Array class.
Array.prototype.myFilter = function (callback) {
    const filteredArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArr.push(this[i]);
        }
    }
    return filteredArr;
};

const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(myArr.myFilter((el) => el > 5));

// Another approach: The function gets the array as a parameter:
const myFilter1 = (callback, array) => {
    const filteredArr = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filteredArr.push(array[i]);
        }
    }
    return filteredArr;
};

console.log(myFilter1((el) => el > 5, [1, 2, 3, 4, 5, 6, 7, 8]));

module.exports = myFilter1;
