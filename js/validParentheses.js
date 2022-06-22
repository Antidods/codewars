//https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
  const arrPar = parens.split("");
  let score = 0;
  for (let index = 0; index < arrPar.length; index++) {
    const element = arrPar[index];
    switch (element) {
      case ")":
        score--;
        break;
      case "(":
        score++;
        break;

      default:
        return false;
    }
    if (score < 0) return false;
  }
  if (score === 0) return true;
  return false;
}
