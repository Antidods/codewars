describe("Базовые операторы без пробелов и скобок на целых числах", () => {
  it(`values: "1+1"`, () => assert.strictEqual(calc("1+1"), 2));
  it(`values: "1-1"`, () => assert.strictEqual(calc("1-1"), 0));
  it(`values: "1*1"`, () => assert.strictEqual(calc("1*1"), 1));
  it(`values: "1/1"`, () => assert.strictEqual(calc("1/1"), 1));
  it(`values: "1+1+1+1"`, () => assert.strictEqual(calc("1+1+1+1"), 4));
  it(`values: "5+6"`, () => assert.strictEqual(calc("5+6"), 11));
  it(`values: "9+8"`, () => assert.strictEqual(calc("9+8"), 17));
});

describe("Добавляем скобки, 1 уровень вложенности", () => {
  it(`values: "(1+1)"`, () => assert.strictEqual(calc("(1+1)"), 2));
  it(`values: "(1-1)"`, () => assert.strictEqual(calc("(1-1)"), 0));
  it(`values: "(1)*1"`, () => assert.strictEqual(calc("(1)*1"), 1));
  it(`values: "1/(1)"`, () => assert.strictEqual(calc("1/(1)"), 1));
  it(`values: "(1+1)+(1+1)"`, () => assert.strictEqual(calc("(1+1)+(1+1)"), 4));
  it(`values: "(5+6)"`, () => assert.strictEqual(calc("5+(6)"), 11));
  it(`values: "(9+8)"`, () => assert.strictEqual(calc("(9+8)"), 17));
});

describe("Несколько уровней вложенности", () => {
  it(`values: "((1+1))"`, () => assert.strictEqual(calc("((1+1))"), 2));
  it(`values: "(1-(1))"`, () => assert.strictEqual(calc("(1-(1))"), 0));
  it(`values: "((1)*1)"`, () => assert.strictEqual(calc("((1)*1)"), 1));
  it(`values: "1/((1))"`, () => assert.strictEqual(calc("1/((1))"), 1));
  it(`values: "((1+1)+(1+1))"`, () =>
    assert.strictEqual(calc("((1+1)+(1+1))"), 4));
  it(`values: "(5+(6))"`, () => assert.strictEqual(calc("(5+(6))"), 11));
  it(`values: "((9)+(8))"`, () => assert.strictEqual(calc("((9)+(8))"), 17));
});

describe("С плавающей точкой", () => {
  it(`values: "5.456+56"`, () => assert.strictEqual(calc("5.456+56"), 61.456));
  it(`values: "7.33 * 1.2"`, () =>
    assert.strictEqual(calc("7.33 * 1.2"), 8.796));
  it(`values: "1.35*2.15"`, () =>
    assert.strictEqual(calc("1.35*2.15"), 2.9025));
});

describe("Codewars tests", () => {
  it(`values: "1+1"`, () => assert.strictEqual(calc("1+1"), 2));
  it(`values: "1 - 1"`, () => assert.strictEqual(calc("1 - 1"), 0));
  it(`values: "1* 1"`, () => assert.strictEqual(calc("1* 1"), 1));
  it(`values: "1 /1"`, () => assert.strictEqual(calc("1 /1"), 1));
  it(`values: "-123"`, () => assert.strictEqual(calc("-123"), -123));
  it(`values: "123"`, () => assert.strictEqual(calc("123"), 123));
  it(`values: "2 /2+3 * 4.75- -6"`, () =>
    assert.strictEqual(calc("2 /2+3 * 4.75- -6"), 21.25));
  it(`values: "12* 123"`, () => assert.strictEqual(calc("12* 123"), 1476));
  it(`values: "2 / (2 + 3) * 4.33 - -6"`, () =>
    assert.strictEqual(calc("2 / (2 + 3) * 4.33 - -6"), 7.732));
  it(`values: "12* 123/-(-5 + 2)"`, () =>
    assert.strictEqual(calc("12* 123/-(-5 + 2)"), 492));
  it(`values: "(1 - 2) + -(-(-(-4)))"`, () =>
    assert.strictEqual(calc("(1 - 2) + -(-(-(-4)))"), 3));
});

//12* 123/-(-5 + 2)
//(1 - 2) + -(-(-(-4)))
