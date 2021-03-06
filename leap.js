function Year (year) {
    this.yearValue = year;
}

Year.prototype.isLeap = function() {
    return this.yearValue%4 === 0 && this.yearValue%100 !== 0 || this.yearValue%400 === 0;
}

module.exports = Year;

