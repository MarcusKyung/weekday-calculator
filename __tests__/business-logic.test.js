import { Date } from '../src/js/business-logic.js';

describe('Date', () => {
  let date;

  beforeEach(() => {
    date = new Date(0o001, 1, 1); //monday
  });

  test('should correctly create a date object with a year, month, and day of the given date', () => {
    expect(date.year).toEqual(0o001);
    expect(date.month).toEqual(1);
    expect(date.day).toEqual(1);
  });

  test('it should check if the year is a leap year' , () => {
    let dateInLeapYear = new Date (2000, 1, 1); //this leap year is divisible by 400
    let dateInLeapYear2 = new Date (2004, 1, 1); //divisible by 4 but not by 100
    let dateNotInLeapYear = new Date (1900, 1, 1); //divisible by 4 and by 100, so not a leap year
    expect(date.checkLeapYear()).toEqual(false);
    expect(dateInLeapYear.checkLeapYear()).toEqual(true);
    expect(dateInLeapYear2.checkLeapYear()).toEqual(true);
    expect(dateNotInLeapYear.checkLeapYear()).toEqual(false);
  })

  test('it should check how many days away the user inputted date is from january 1st 0001', () => {
    let targetDate1 = new Date (0o001, 1, 31); //january date
    let targetDate2 = new Date (0o001, 2, 28); //february date
    let targetDate3 = new Date (0o001, 3, 31); //march date
    let targetDate4 = new Date (0o001, 4, 30); //april date
    let targetDate5 = new Date (0o001, 5, 31); //may date
    let targetDate6 = new Date (0o001, 6, 30); //june date
    let targetDate7 = new Date (0o001, 7, 31); //july date
    let targetDate8 = new Date (0o001, 8, 31); //august date
    let targetDate9 = new Date (0o001, 9, 30); //september date
    let targetDate10 = new Date (0o001, 10, 31); //october date
    let targetDate11 = new Date (0o001, 11, 30); //november date
    let targetDate12 = new Date (0o001, 12, 31); //december date
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

  test('it should find day of the week based on a date from the first day of the year in 0001', () => {
    let birthday1 = new Date(0o001, 1, 1);
    let birthday2 = new Date(0o001, 1, 2);
    let birthday3 = new Date(0o001, 1, 3);
    let birthday4 = new Date(0o001, 1, 4);
    let birthday5 = new Date(0o001, 1, 5);
    let birthday6 = new Date(0o001, 1, 6);
    let birthday7 = new Date(0o001, 1, 7);
    let birthday8 = new Date(0o001, 3, 30);
    birthday1.convertDateToDays();
    birthday1.findDayOfWeek();
    birthday2.convertDateToDays();
    birthday2.findDayOfWeek();
    birthday3.convertDateToDays();
    birthday3.findDayOfWeek();
    birthday4.convertDateToDays();
    birthday4.findDayOfWeek();
    birthday5.convertDateToDays();
    birthday5.findDayOfWeek();
    birthday6.convertDateToDays();
    birthday6.findDayOfWeek();
    birthday7.convertDateToDays();
    birthday7.findDayOfWeek();
    expect(birthday1.dayOfTheWeek).toEqual("monday");
    expect(birthday2.dayOfTheWeek).toEqual("tuesday");
    expect(birthday3.dayOfTheWeek).toEqual("wednesday");
    expect(birthday4.dayOfTheWeek).toEqual("thursday");
    expect(birthday5.dayOfTheWeek).toEqual("friday");
    expect(birthday6.dayOfTheWeek).toEqual("saturday");
    expect(birthday7.dayOfTheWeek).toEqual("sunday");
  })

  test('it should calculate the years since 1/1/0001', () => {
    let first = new Date(0o002, 1, 1);
    let second = new Date(0o003, 1, 1);
    let third = new Date(0o004, 1, 1);
    let fourth = new Date(0o005, 1, 1);
    let fifth = new Date(0o006, 1, 1);
    expect(first.yearsSince).toEqual(1);
    expect(second.yearsSince).toEqual(2);
    expect(third.yearsSince).toEqual(3);
    expect(fourth.yearsSince).toEqual(4);
    expect(fifth.yearsSince).toEqual(5);
  })
});