"use strict";

//https://www.codewars.com/kata/58c5577d61aefcf3ff000081

function encodeRailFenceCipher(string, numberRails) {
  const array = string.split("");
  let encode = "",
    obj = {},
    direction = true,
    step = 1;

  for (let rail = numberRails; rail > 0; rail--) obj[rail] = [];

  for (let elem = 0; elem < array.length; elem++) {
    obj[step].push(array[elem]);

    if (direction) step++;
    else step--;

    if (step > numberRails) {
      step -= 2;
      direction = false;
    }

    if (step === 0) {
      step += 2;
      direction = true;
    }
  }

  for (let rail = 1; rail <= numberRails; rail++) encode += obj[rail].join("");

  return encode;
}

function decodeRailFenceCipher(string, numberRails) {
  

}


