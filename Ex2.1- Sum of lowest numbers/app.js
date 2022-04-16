/*
Assumptions:
? The array contains at least 4 positive integers.
? No floats or non-positive integers will be passed.
*/

// Two approaches:

/* 
First approach: using splice. 
Run time: O(n)
disadvantages:  need to copy the array (in order not to change the original array) and the space 
complexity increase by n.*/
const sumTwoLowest = (numArr) => {
    const copiedArr = [...numArr];
    let currMin;
    let sum = 0;
    let minNumIdx;
    currMin = Math.min(...copiedArr);
    sum += currMin;
    minNumIdx = copiedArr.indexOf(currMin);
    copiedArr.splice(minNumIdx, 1);
    sum += Math.min(...copiedArr);
    return sum;
};

/* 
Second approach: using sort
RunTime: O(nlogn), worse performance than the first approach (disadvantage), 
but here we don't need to use more space.
 */
const sumTwoLowest2 = (numArr) => {
    numArr.sort((a, b) => a - b);
    return numArr[0] + numArr[1];
};

const myArr = [19, 5, 42, 2, 77];
const myArr2 = [10, 343445353, 3453445, 3453545353453];
console.log(sumTwoLowest(myArr));
console.log(sumTwoLowest(myArr2));
console.log(sumTwoLowest2(myArr));
console.log(sumTwoLowest2(myArr2));

module.exports = {
    sumTwoLowest: sumTwoLowest,
    sumTwoLowest2: sumTwoLowest2,
};
