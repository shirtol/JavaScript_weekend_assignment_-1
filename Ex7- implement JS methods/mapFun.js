// First approach: Extension method for Array class.
Array.prototype.myMap = function (callback) {
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }

    return newArr;
};

const myArr = [1, 2, 3, 4, 5];
console.log(myArr.myMap((el) => el * 2));

// Another approach: The function gets the array as a parameter:
const myMap1 = (callback, array) => {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i], i, array));
    }
    return newArr;
};

console.log(myMap1((el) => el * 2, [1, 2, 3, 4, 5]));

module.exports = myMap1;
