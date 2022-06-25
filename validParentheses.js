//https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens) {
   let result = 0;

   for (let n = 0; n < parens.length; n++) {
      const element = parens[n];
      switch (element) {
         case "(":
            result++;
            break;
         case ")":
            result--;
            break;
         default:
            return false;
            break;
      }

      if (result < 0) return false;
   }

   if (result === 0) return true;
   return false;
}

