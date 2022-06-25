"use strict";

//https://www.codewars.com/kata/58c5577d61aefcf3ff000081

function encodeRailFenceCipher(string, numberRails) {
   const array = string.split("");
   let encode = "",
      obj = [],
      direction = true,
      step = 0;

   for (let rail = 0; rail < numberRails; rail++) obj[rail] = [];

   for (let elem = 0; elem < array.length; elem++) {
      obj[step].push(array[elem]);

      if (direction) step++;
      else step--;

      if (step === numberRails) {
         step -= 2;
         direction = false;
      }

      if (step < 0) {
         step += 2;
         direction = true;
      }
   }

   for (let rail = 0; rail < numberRails; rail++) encode += obj[rail].join("");

   return encode;
}

function decodeRailFenceCipher(string, numberRails) {
   const array = string.split("");
   let decode = "";
   let obj = [];
   let direction = true;
   let step = 0;
   let rail = 0;

   for (let Rail = 0; Rail < numberRails; Rail++) obj[Rail] = [];

   for (let elem = 0; elem < array.length; elem++) {
      obj[step].push(array[elem]);

      if (direction) step++;
      else step--;

      if (step === numberRails) {
         step -= 2;
         direction = false;
      }

      if (step < 0) {
         step += 2;
         direction = true;
      }
   }

   step = 0;

   for (let index = 0; index < array.length; index++) {
      obj[rail][step] = array[index];
      step++;
      if (!obj[rail][step]) {
         step = 0;
         rail++;
      }
   }

   for (let elem = 0; elem < array.length; elem++) {
      decode += obj[step][0];
      obj[step].shift();

      if (direction) step++;
      else step--;

      if (step === numberRails) {
         step -= 2;
         direction = false;
      }

      if (step < 0) {
         step += 2;
         direction = true;
      }
   }

   return decode;
}

