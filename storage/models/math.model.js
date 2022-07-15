function checkOddEven(num) {
    if (typeof num === "string") {
        throw new Error("n must be a number")
    }
    return num % 2 === 0 ? 'even' : 'odd';
}

function getCurrentDay() {
    return new Date().getDay();
}

function isWeekEnd() {
    const day = getCurrentDay()
    return day >= 6;
}

function getCurrentYear() {
    return new Date().getFullYear();
}

function isLeapYear() {
    const year = getCurrentYear()
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
}



module.exports = {
    checkOddEven,
    isWeekEnd,
    isLeapYear,
};
