//https://www.codewars.com/kata/542f3d5fd002f86efc00081a

function prime_factors(n) {
   let out_arr = [];

   for (let i = 2; i < n + 1; i++) {
      console.log(i);
      if (n % i === 0) {
         out_arr.push(i);
         n = n / i;
         i = 1;
      }
   }

   return out_arr;
}
