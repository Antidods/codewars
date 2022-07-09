//https://www.codewars.com/kata/52a78825cdfc2cfc87000005

function calc(expression) {
   let inArray = [];
   let tempNum = "";

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
            (symbol == "-" && inArray.at(-1) === "(") ||
            (symbol == "-" && inArray.at(-1) === ")") ||
            (symbol == "-" && inArray.at(-1) === "+") ||
            (symbol == "-" && inArray.at(-1) === "-") ||
            (symbol == "-" && inArray.at(-1) === "*") ||
            (symbol == "-" && inArray.at(-1) === "/")
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

   function calcMany(array) {
      for (let i = 1; i < array.length; i++) {
         if (array.length < 2) break;
         if (array[i] === "*" || array[i] === "/") {
            array.splice(
               [i - 1],
               3,
               calcTwo(array[i - 1], array[i], array[i + 1])
            );
            i--;
         }
         if (array.length < 2) return array[0];
      }

      for (let i = 1; i < array.length; i++) {
         if (array.length < 2) break;
         if (array[i] === "+" || array[i] === "-") {
            array.splice(
               [i - 1],
               3,
               calcTwo(array[i - 1], array[i], array[i + 1])
            );
            i--;
         }
         if (array.length < 2) return array[0];
      }

      return Number(array);
   }

   console.log(inArray);

   console.log(inArray.indexOf("("));

   let firstBracket = -1;
   let lastBracket = -1;
   let x = 10;

   while (inArray.indexOf("(") > -1 && x) {
      x--;
      firstBracket = -1;
      lastBracket = -1;
      console.log("положение скобок", firstBracket, lastBracket);
      for (let i = 0; i < inArray.length; i++) {
         const element = inArray[i];
         if (element === "(") firstBracket = i;
         if (element === ")") {
            lastBracket = i;
            break;
         }
      }
      console.log("положение скобок", firstBracket, lastBracket);

      if (firstBracket > -1 && lastBracket > -1) {
         const promResult = calcMany(
            inArray.slice(firstBracket + 1, lastBracket)
         );
         inArray.splice(
            firstBracket,
            lastBracket - firstBracket - 1,
            promResult
         );
      }
      console.log(inArray);
      x--;
   }

   return calcMany(inArray);
}

calc("2 / ( 2 + 3) * 4.33 - -6");
