export class Date{
  
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.daysAway = 0;
  }

  checkLeapYear() {
    if (this.year % 400 === 0)  {
      return true;
    } else if ((this.year % 4 === 0) && (this.year % 100 !== 0))  {
      return true;
    } else {
      return false;
    }
  }

  convertDateToDays() {
    if (this.month === 1){
      this.daysAway = this.day;
    } else if (this.month === 2) {
      this.daysAway = this.day + 31;
    } else if (this.month === 3) {
      this.daysAway = this.day + 59; 
    } else if (this.month === 4) {
      this.daysAway = this.day + 90; 
    } else if (this.month === 5) {
      this.daysAway = this.day + 120;  
    } else if (this.month === 6) {
      this.daysAway = this.day + 151; 
    } else if (this.month === 7) {
      this.daysAway = this.day + 181; 
    } else if (this.month === 8) {
      this.daysAway = this.day + 212; 
    } else if (this.month === 9) {
      this.daysAway = this.day + 243; 
    } else if (this.month === 10) {
      this.daysAway = this.day + 273; 
    } else if (this.month === 11) {
      this.daysAway = this.day + 304; 
    } else if (this.month === 12) {
      this.daysAway = this.day + 334;
    } return this.daysAway;
  }
}
