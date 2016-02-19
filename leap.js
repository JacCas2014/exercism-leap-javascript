function Year (year) {
    this.yearValue = year;
    this.isLeap = function() {
        if(this.yearValue%4 === 0) {
            if (this.yearValue%100 === 0 && this.yearValue%400 !== 0) {
                return false;
            }
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Year;

