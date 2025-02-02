/*
Assumptions:
? Po and P are positive integers. P isn't lower then P0 (because we asked to surpass P).
? aug is an integer.
? Percent is a positive number or null.
*/

const nbYear = (
    populationStart,
    percent,
    numPeopleTurnover,
    populationDest
) => {
    let numOfYears = 0;
    if (percent === null) {
        percent = 0;
    }
    while (populationStart < populationDest) {
        if (
            numPeopleTurnover < 0 &&
            (percent / 100) * populationStart < Math.abs(numPeopleTurnover)
        ) {
            return "We will never get to the desire population";
        }
        populationStart +=
            populationStart * (percent / 100) + numPeopleTurnover;
        populationStart = Math.floor(populationStart);

        numOfYears++;
    }
    return numOfYears;
};

module.exports = nbYear;
