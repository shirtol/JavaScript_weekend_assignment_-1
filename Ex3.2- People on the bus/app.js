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

/* Using forEach: I like the other approach more than this one because the iteration stops when numOfPeopleIn get 
below zero (But they have the same runtime complexity: O(n)))*/
const numOfPeopleInBus2 = (busArr) => {
    let numOfPeopleIn = 0;
    busArr.forEach((station) => {
        if (numOfPeopleIn >= 0) {
            numOfPeopleIn += station[0] - station[1];
        }
    });
    return numOfPeopleIn >= 0 ? numOfPeopleIn : "invalid input";
};

module.exports = {
    numOfPeopleInBus,
    numOfPeopleInBus2,
};
