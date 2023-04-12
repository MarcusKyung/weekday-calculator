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


});