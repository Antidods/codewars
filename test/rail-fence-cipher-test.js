describe("encodeRailFenceCipher", function () {
  it("basic test codewars 1", function () {
    assert.equal(
      encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3),
      "WECRLTEERDSOEEFEAOCAIVDEN"
    );
  });
});

describe("encodeRailFenceCipher", function () {
  it("basic test codewars 1", function () {
    assert.equal(
      decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3),
      "WEAREDISCOVEREDFLEEATONCE"
    );
  });
});

describe("encodeRailFenceCipher", function () {
  it("basic test codewars 1", function () {
    assert.equal(encodeRailFenceCipher("Hello, World!", 3), "Hoo!el,Wrdl l");
  });
});
