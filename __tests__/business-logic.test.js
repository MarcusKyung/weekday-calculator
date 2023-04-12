import { Date } from '../src/js/business-logic.js';

describe('Date', () => {
  let date;

  beforeEach(() => {
    date = new Date(2001, 1, 1); //monday
  });

  test('should correctly create a date object with a year, month, and day of the given date', () => {
    expect(date.year).toEqual(2001);
    expect(date.month).toEqual(1);
    expect(date.day).toEqual(1);
  });

  test('it should check if the year is a leap year' , () => {
    let dateInLeapYear = new Date (2000, 1, 1); //this leap year is divisible by 400
    let dateInLeapYear2 = new Date (2004, 1, 1); //divisible by 4 but not by 100
    let dateNotInLeapYear = new Date (1900, 1, 1); //divisible by 4 and by 100, so not a leap year
    expect(dateInLeapYear.checkLeapYear()).toEqual(true);
    expect(date.checkLeapYear()).toEqual(false);
    expect(dateInLeapYear2.checkLeapYear()).toEqual(true);
    expect(dateNotInLeapYear.checkLeapYear()).toEqual(false);
  })

  test('it should check how many days away the user inputted date is from january 1st 2001', () => {
    let targetDate1 = new Date (2001, 1, 31); //january date
    let targetDate2 = new Date (2001, 2, 28); //january date
    let targetDate3 = new Date (2001, 3, 31); //january date
    let targetDate4 = new Date (2001, 4, 30); //january date
    let targetDate5 = new Date (2001, 5, 31); //january date
    let targetDate6 = new Date (2001, 6, 30); //january date
    let targetDate7 = new Date (2001, 7, 31); //january date
    let targetDate8 = new Date (2001, 8, 31); //january date
    let targetDate9 = new Date (2001, 9, 30); //january date
    let targetDate10 = new Date (2001, 10, 31); //january date
    let targetDate11 = new Date (2001, 11, 30); //january date
    let targetDate12 = new Date (2001, 12, 31); //january date
    expect(targetDate1.convertDateToDays()).toEqual(31);
    expect(targetDate2.convertDateToDays()).toEqual(59);
    expect(targetDate3.convertDateToDays()).toEqual(90);
    expect(targetDate4.convertDateToDays()).toEqual(120);
    expect(targetDate5.convertDateToDays()).toEqual(151);
    expect(targetDate6.convertDateToDays()).toEqual(181);
    expect(targetDate7.convertDateToDays()).toEqual(212);
    expect(targetDate8.convertDateToDays()).toEqual(243);
    expect(targetDate9.convertDateToDays()).toEqual(273);
    expect(targetDate10.convertDateToDays()).toEqual(304);
    expect(targetDate11.convertDateToDays()).toEqual(334);
    expect(targetDate12.convertDateToDays()).toEqual(365);
  })
});