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

module.exports = maskify;
