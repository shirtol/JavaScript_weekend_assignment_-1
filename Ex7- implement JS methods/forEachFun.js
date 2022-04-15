const myForEach = (callback, array) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
};

const someFun = (array) => {
    const newArr = [];
    myForEach((element) => newArr.push(element + 2), array);
    return newArr;
};

console.log(someFun([1, 2, 3, 4]));
