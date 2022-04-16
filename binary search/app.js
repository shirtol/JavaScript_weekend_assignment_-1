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

module.exports = binarySearch;
