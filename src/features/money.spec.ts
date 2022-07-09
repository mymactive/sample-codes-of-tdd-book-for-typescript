import { Money } from './money';

// Dollarのテスト
describe('Dollarのテスト', () => {
  test('5$ * 2 = 10$', () => {
    const fiveDollars = Money.dollar(5);
    expect(fiveDollars.times(2)).toMatchObject(Money.dollar(10));
  });

  test('5$ * 3 = 15$', () => {
    const fiveDollars = Money.dollar(5);
    expect(fiveDollars.times(3)).toMatchObject(Money.dollar(15));
  });

  test('5$ = 5$', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
  });

  test('5$ != 6$', () => {
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
  });
});

describe('DollarとFranの相互テスト', () => {
  test('5$ != 5CHF', () => {
    expect(Money.dollar(5).equals(Money.franc(5))).toBeFalsy();
  });
});

test('通貨のチェックをする', () => {
  expect(Money.dollar(1).currency).toBe('USD');
  expect(Money.franc(1).currency).toBe('CHF');
});
