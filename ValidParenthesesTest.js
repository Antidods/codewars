describe("Tests", () => {
  it(`values: "("`, () => assert.strictEqual(validParentheses("("), false));
  it(`values: ")"`, () => assert.strictEqual(validParentheses(")"), false));
  it(`values: ""`, () => assert.strictEqual(validParentheses(""), true));
  it(`values: "()"`, () => assert.strictEqual(validParentheses("()"), true));
  it(`values: "())"`, () => assert.strictEqual(validParentheses("())"), false));
});
