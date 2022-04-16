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

module.exports = numOfPeopleInBus;
