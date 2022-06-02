// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable (seconds) {
   let HH, MM, SS;

   function toDouble(params) {
      if (params < 10) return `0${params}`
      return params;
   }

   HH = toDouble(Math.floor(seconds / 3600));
   SS = toDouble(seconds % 60);
   MM = toDouble(Math.floor((seconds - HH*3600)/60));



   return `${HH}:${MM}:${SS}`;
 }
