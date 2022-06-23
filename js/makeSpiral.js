"use strict";

// https://www.codewars.com/kata/534e01fbbb17187c7e0000c6

function spiralize(n) {
  // creating a two-dimensional array and filling it with zeros
  const arr = [];
  for (let elemY = 0; elemY < n; elemY++) {
    arr[elemY] = [];
    for (let elemX = 0; elemX < n; elemX++) arr[elemY][elemX] = 0;
  }

  let x = 0; // the x coordinate of the array element
  let y = 0; // the y coordinate of the array element
  let len = n; // the duration of the series when moving in a spiral
  let step = 1; // the number of the side element when moving in a spiral
  let vector = 1; // a variable that determines the direction when moving in a spiral
  let stepTwo = 0; // hmm, it's hard to explain what this variable does, but it affects the shape of the spiral

  for (let index = 0; index < Math.pow(n, 2); index++) {
    arr[y][x] = 1;
    if (len === 1) break;
    step++;

    if (step > len) {
      vector++;
      len = len - 0.5;
      step = 1;
      stepTwo++;
      if (stepTwo === 3) {
        len--;
        stepTwo = 1;
      }
    }

    if (vector === 5) vector = 1;

    switch (
      vector // we determine the direction of the spiral
    ) {
      case 1:
        x++;
        break;
      case 2:
        y++;
        break;
      case 3:
        x--;
        break;
      case 4:
        y--;
        break;
    }

    //Checks adjacent elements
    let summ = 0;
    if (typeof arr[y][x + 1] !== "undefined" && arr[y][x + 1] === 1) summ++;
    if (typeof arr[y + 1] !== "undefined" && arr[y + 1][x] === 1) summ++;
    if (typeof arr[y][x - 1] !== "undefined" && arr[y][x - 1] === 1) summ++;
    if (typeof arr[y - 1] !== "undefined" && arr[y - 1][x] === 1) summ++;
    if (summ > 1) break;
  }
  return arr;
}

console.log(spiralize(5));
