const displayYesOrNo = (bool) => (bool ? "Yes" : "No");

console.log(displayYesOrNo(5 > 2));
console.log(displayYesOrNo(5 < 2));

module.exports = displayYesOrNo;
