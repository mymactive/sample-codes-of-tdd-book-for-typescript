import { Dollar, Franc } from './money';

// Dollarのテスト
describe('Dollarのテスト', () => {
  test('5$ * 2 = 10$', () => {
    const fiveDollars = new Dollar(5);
    expect(fiveDollars.times(2)).toMatchObject(new Dollar(10));
  });

  test('5$ * 3 = 15$', () => {
    const fiveDollars = new Dollar(5);
    expect(fiveDollars.times(3)).toMatchObject(new Dollar(15));
  });

  test('5$ = 5$', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  });

  test('5$ != 6$', () => {
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  });
});

// Francのテスト
describe('Francのテスト', () => {
  test('5CHF * 2 = 10CHF', () => {
    const fiveFrancs = new Franc(5);
    expect(fiveFrancs.times(2)).toMatchObject(new Franc(10));
  });

  test('5CHF * 3 = 15CHF', () => {
    const fiveFrancs = new Franc(5);
    expect(fiveFrancs.times(3)).toMatchObject(new Franc(15));
  });

  test('5CHF = 5CHF', () => {
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
  });

  test('5CHF != 6CHF', () => {
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
  });
});
