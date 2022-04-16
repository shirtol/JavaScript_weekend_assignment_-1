const binarySearch = (arr, x) => {
    let l = 0;
    let r = arr.length - 1;
    let m = Math.floor(l - (l - r) / 2);
    while (l <= r) {
        if (arr[m] > x) {
            r = m - 1;
        } else if (arr[m] < x) {
            l = m + 1;
        } else if (arr[m] === x) {
            return "Element found!";
        }
        m = Math.floor(l - (l - r) / 2);
    }
    return "Element not found!";
};

console.log(binarySearch([1, 3, 5, 7, 8, 9], 5));
console.log(binarySearch([1, 3, 5, 7, 8, 9], 6));

module.exports = binarySearch;
