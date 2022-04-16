/*
Assumptions:
? The array contains at least 4 positive integers.
? No floats or non-positive integers will be passed.
*/

// Two approaches:

/* 
First approach: using splice. 
Runtime complexity: O(n)
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
Runtime complexity: O(nlogn), worse performance than the first approach (disadvantage), 
but here we don't need to use more space.
 */
const sumTwoLowest2 = (numArr) => {
    numArr.sort((a, b) => a - b);
    return numArr[0] + numArr[1];
};

module.exports = {
    sumTwoLowest: sumTwoLowest,
    sumTwoLowest2: sumTwoLowest2,
};
