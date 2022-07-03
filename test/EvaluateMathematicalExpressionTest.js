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
  it(`values: "((1+1))"`, () => assert.strictEqual(calc("((1+1))"), 1)); 
  it(`values: "(1-(1))"`, () => assert.strictEqual(calc("(1-(1))"), 0));
  it(`values: "((1)*1)"`, () => assert.strictEqual(calc("((1)*1)"), 1));
  it(`values: "1/((1))"`, () => assert.strictEqual(calc("1/((1))"), 1));
  it(`values: "((1+1)+(1+1))"`, () => assert.strictEqual(calc("((1+1)+(1+1))"), 4));
  it(`values: "(5+(6))"`, () => assert.strictEqual(calc("(5+(6))"), 11));
  it(`values: "((9)+(8))"`, () => assert.strictEqual(calc("((9)+(8))"), 17));
});

describe("С плавающей точкой", () => {
  it(`values: "5.456+56"`, () => assert.strictEqual(calc("5.456+56"), 61.456));
  it(`values: "7.33 * 1.2"`, () => assert.strictEqual(calc("7.33 * 1.2"), 8.796));
  it(`values: "1.333333*3.269"`, () => assert.strictEqual(calc("1.333333*3.269"), 4.358665577));

});

// describe("Tests", () => {
//   it(`values: ""`, () => assert.strictEqual(calc(""), false));
//   it(`values: ""`, () => assert.strictEqual(calc(""), false));
//   it(`values: ""`, () => assert.strictEqual(calc(""), false));
//   it(`values: ""`, () => assert.strictEqual(calc(""), false));
//   it(`values: ""`, () => assert.strictEqual(calc(""), false));
//   it(`values: ""`, () => assert.strictEqual(calc(""), false));
//   it(`values: ""`, () => assert.strictEqual(calc(""), false));
// });

describe("Tests", () => {
  it("test", () => {
    const tests = [
      ["1+1", 2],
      ["1 - 1", 0],
      ["1* 1", 1],
      ["1 /1", 1],
      ["-123", -123],
      ["123", 123],
      ["2 /2+3 * 4.75- -6", 21.25],
      ["12* 123", 1476],
      ["2 / (2 + 3) * 4.33 - -6", 7.732],
    ];

    for (const [input, expected] of tests)
      Test.assertEquals(calc(input), expected);
  });
});
