const numOfPeopleInBus = (busArr) => {
    let numOfPeopleIn = 0;
    for (const stationInfo of busArr) {
        if (numOfPeopleIn >= 0) {
            numOfPeopleIn += stationInfo[0] - stationInfo[1];
        } else {
            return "invalid input";
        }
    }
    return numOfPeopleIn;
};

console.log(
    numOfPeopleInBus([
        [2, 0],
        [3, 2],
        [4, 5],
    ])
);

console.log(
    numOfPeopleInBus([
        [5, 0],
        [1, 7],
        [1, 1],
    ])
);

console.log(
    numOfPeopleInBus([
        [0, 0],
        [0, 0],
        [0, 0],
    ])
);

console.log(
    numOfPeopleInBus([
        [5, 0],
        [3, 2],
        [2, 8],
    ])
);
