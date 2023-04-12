import { Date } from '../src/js/business-logic.js';

describe('Date', () => {
  let date;

  beforeEach(() => {
    date = new Date(2001, 1, 1);
  });

  test('should correctly create a date object with a year, month, and day of the given date', () => {
    expect(date.year).toEqual(2001);
    expect(date.month).toEqual(1);
    expect(date.day).toEqual(1);
  });

  test('it should check if the year is a leap year' , () => {
    let dateInLeapYear = new Date (2000,1,1); //this leap year is divisible by 400
    let dateInLeapYear2 = new Date (2004,1,1); //divisible by 4 but not by 100
    let dateNotInLeapYear = new Date (1900,1,1); //divisible by 4 and by 100, so not a leap year
    expect(dateInLeapYear.checkLeapYear()).toEqual(true);
    expect(date.checkLeapYear()).toEqual(false);
    expect(dateInLeapYear2.checkLeapYear()).toEqual(true);
    expect(dateNotInLeapYear.checkLeapYear()).toEqual(false);
  })
});