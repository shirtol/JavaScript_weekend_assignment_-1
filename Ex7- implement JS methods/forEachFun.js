// First approach: Extension method for Array class.
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

const someFun = (array) => {
    const newArr = [];
    array.myForEach((el) => newArr.push(el + 2));
    return newArr;
};

console.log(someFun([1, 2, 3, 4]));

// Another approach: The function gets the array as a parameter:
const myForEach1 = (callback, array) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
};

const someFun1 = (array) => {
    const newArr = [];
    myForEach1((element) => newArr.push(element + 2), array);
    return newArr;
};

console.log(someFun1([1, 2, 3, 4]));
