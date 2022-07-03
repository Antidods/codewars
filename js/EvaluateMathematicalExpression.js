//https://www.codewars.com/kata/52a78825cdfc2cfc87000005

function calc(expression) {
  let inArray = [];
  let tempNum = "";

  for (let i = 0; i < expression.length; i++) {
    const symbol = expression[i];

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
      symbol == "0"
    ) {
      tempNum += symbol;
      if (i === expression.length - 1) inArray.push(symbol);
    }
  }

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

  return calcTwo(inArray[0], inArray[1], inArray[2]);
}

calc("6+3+756/3");
