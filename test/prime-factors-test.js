describe("codewars basic", () => {
   it(`values: "1"`, () => assert.deepEqual(prime_factors(1), []));
   it(`values: "3"`, () => assert.deepEqual(prime_factors(3), [3]));
   it(`values: "8"`, () => assert.deepEqual(prime_factors(8), [2, 2, 2]));
   it(`values: "9"`, () => assert.deepEqual(prime_factors(9), [3, 3]));
   it(`values: "12"`, () => assert.deepEqual(prime_factors(12), [2, 2, 3]));
});
