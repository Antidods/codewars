//https://www.codewars.com/kata/52a78825cdfc2cfc87000005

//https://github.com/Antidods/codewars

let calc = (expression) => {
  let inArray = []; // string "expression" to array
  let tempNum = ""; // variable for combining individual characters into numbers

  //  two variables for the position of the opening and closing brackets
  let firstBracket = -1;
  let lastBracket = -1;

  // transform a string into an array
  for (let i = 0; i < expression.length; i++) {
    let symbol = expression[i];
    if (symbol === ",") symbol = ".";
    if (symbol === "-" && i === 0) {
      tempNum += symbol;
      continue;
    }

    if (
      symbol == "(" ||
      symbol == ")" ||
      symbol == "+" ||
      symbol == "-" ||
      symbol == "*" ||
      symbol == "/"
    ) {
      if (tempNum) {
        inArray.push(tempNum);
        tempNum = "";
      }

      if (
        (symbol == "-" && inArray[inArray.length - 1] === "(") ||
        (symbol == "-" && inArray[inArray.length - 1] === ")") ||
        (symbol == "-" && inArray[inArray.length - 1] === "+") ||
        (symbol == "-" && inArray[inArray.length - 1] === "-") ||
        (symbol == "-" && inArray[inArray.length - 1] === "*") ||
        (symbol == "-" && inArray[inArray.length - 1] === "/")
      ) {
        tempNum += symbol;
        continue;
      }

      inArray.push(symbol);
    } else if (
      symbol == "1" ||
      symbol == "2" ||
      symbol == "3" ||
      symbol == "4" ||
      symbol == "5" ||
      symbol == "6" ||
      symbol == "7" ||
      symbol == "8" ||
      symbol == "9" ||
      symbol == "0" ||
      symbol == "."
    ) {
      tempNum += symbol;
      if (i === expression.length - 1) {
        inArray.push(tempNum);
      }
    }
  }

  if (inArray.length === 1) return Number(inArray[0]);

  //the function calculates values for two arguments
  function calcTwo(first, operator, last) {
    let result;
    switch (operator) {
      case "+":
        result = Number(first) + Number(last);
        break;

      case "-":
        result = Number(first) - Number(last);
        break;

      case "/":
        result = Number(first) / Number(last);
        break;

      case "*":
        result = Number(first) * Number(last);
        break;

      default:
        break;
    }
    return result;
  }

  //the function calculates for multiple arguments
  function calcMany(array) {
    if (array.length < 2) return Number(array);

    if (array.length === 2 && array[0] === "-") return Number(array[1]) * -1;

    if (array.length === 2 && array[0] === "+") return Number(array[1]);

    for (let i = 1; i < array.length; i++) {
      if (array[i] === "*" || array[i] === "/") {
        array.splice([i - 1], 3, calcTwo(array[i - 1], array[i], array[i + 1]));
        i--;
      }
      if (array.length < 2) return array[0];
    }

    for (let i = 1; i < array.length; i++) {
      if (array[i] === "+" || array[i] === "-") {
        array.splice([i - 1], 3, calcTwo(array[i - 1], array[i], array[i + 1]));
        i--;
      }
      if (array.length < 2) return array[0];
    }
  }

  // the loop goes through the array, finds the brackets and calculates the values inside the brackets
  while (inArray.indexOf("(") > -1) {
    firstBracket = -1;
    lastBracket = -1;

    for (let i = 0; i < inArray.length; i++) {
      const element = inArray[i];
      if (element === "(") firstBracket = i;
      if (element === ")") {
        lastBracket = i;
        break;
      }
    }

    if (firstBracket > -1 && lastBracket > -1) {
      const promResult = calcMany(inArray.slice(firstBracket + 1, lastBracket));
      inArray.splice(firstBracket, lastBracket - firstBracket + 1, promResult);
    }
  }

  //the loop goes through the array, looks for the "-" signs and makes the numbers negative, where it is needed
  for (let i = 0; i < inArray.length; i++) {
    if (i === 0 && inArray[i] === "-") inArray[i] = Number(inArray[i]) * -1;
    if (
      (inArray[i + 1] === "-" && inArray[i] === "(") ||
      (inArray[i + 1] === "-" && inArray[i] === ")") ||
      (inArray[i + 1] === "-" && inArray[i] === "+") ||
      (inArray[i + 1] === "-" && inArray[i] === "-") ||
      (inArray[i + 1] === "-" && inArray[i] === "*") ||
      (inArray[i + 1] === "-" && inArray[i] === "/")
    ) {
      inArray[i + 2] = Number(inArray[i + 2]) * -1;
      inArray.splice(i + 1, 1);
    }
  }

  return calcMany(inArray);
};
