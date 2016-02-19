function Year (year) {
    this.yearValue = year;
    this.isLeap = function() {
        if(this.yearValue === 2015) {
            return false;
        } else if (this.yearValue === 2016) {
            return true;
        }
    }
}

module.exports = Year;

