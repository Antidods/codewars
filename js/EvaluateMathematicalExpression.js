//https://www.codewars.com/kata/52a78825cdfc2cfc87000005

function calc(expression) {
   let inArray = [];
   let tempNum = "";

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

   for (let i = 0; i < expression.length; i++) {
      let symbol = expression[i];

      if (symbol === ",") symbol = ".";
      if (i === 0 && symbol === "-") {
         tempNum += symbol;
         continue;
      }

      if (symbol === "-" && inArray.at(-1) === "-" ||
          symbol === "-" && inArray.at(-1) === "+" ||
          symbol === "-" && inArray.at(-1) === "*" ||
          symbol === "-" && inArray.at(-1) === "/"
      ){
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

   console.log(inArray);
   console.log(Number(inArray.at(-3)));

   return calcMany(inArray);
}

console.log(calc("2 /2-3 * 4.75   -6"));
