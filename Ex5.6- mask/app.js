const maskify = (privateStr) => {
    let maskedStr = "";
    let lastFourChars = privateStr.slice(privateStr.length - 4);
    if (privateStr.length < 4) {
        return privateStr;
    }
    for (let i = 0; i < privateStr.length - 4; i++) {
        maskedStr += "#";
    }
    return maskedStr + lastFourChars;
};

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
