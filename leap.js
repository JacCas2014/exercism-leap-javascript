function Year (year) {
    this.yearValue = year;
    this.isLeap = function() {
        if(this.yearValue%4 === 0) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Year;

