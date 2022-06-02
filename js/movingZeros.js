//https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  let resultArr = [];
  let sumZero = 0;

  arr.forEach((element) => {
    if (element === 0 || element === "0") sumZero++;
    else resultArr.push(element);
  });

  while (sumZero) {
    resultArr.push(0);
    sumZero--;
  }

  return resultArr;
}


