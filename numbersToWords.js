var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};


function numberToEnglish (number) {
  var numStr = number.toString();
  var l = numStr.length;
    console.log(numStr[1] === '0' )
  var finalStr = '';
  if ( l === 1 ) {
    finalStr = finalStr.concat(numbersToWords[numStr])
  } else if ( l === 2 && numStr[1] === 0 ) {
    finalStr = finalStr.concat(numbersToWords[numStr])
  } else if ( l == 2 ) {
    finalStr = finalStr.concat(numbersToWords[numStr.slice(0,1) + 0] + "-" + numberToEnglish(numStr.slice(1)))
  } else if ( l === 3 ) {
    finalStr = finalStr.concat(numbersToWords[numStr.slice(0,1)] + " " +  numbersToPlace['100'] + " " + numberToEnglish(numStr.slice(1)))
  }

  return finalStr
}

console.log(numberToEnglish(20))







/*
number:
7 "seven"
number:
575 "five hundred seventy-five"
number:
78193512  "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*/



// for (b = finlOutPut.length - 1; b >= 0; b--) {
//     if (finlOutPut[b] != "dontAddBigSufix") {
//         finlOutPut[b] = finlOutPut[b] + bigNumArry[bigScalCntr]; // <<<
//         bigScalCntr++;
//     }
//     else {
//         //replace the string at finlOP[b] from "dontAddBigSufix" to empty String.
//         finlOutPut[b] = ' ';
//         bigScalCntr++; //advance the counter  
//     }
// }

//     //convert The output Arry to , more printable string 
//     var nonzero = false; // <<<
//     for(n = 0; n<finlOutPut.length; n++){
//         if (finlOutPut[n] != ' ') { // <<<
//             if (nonzero) output += ' , '; // <<<
//             nonzero = true; // <<<
//         } // <<<
//         output +=finlOutPut[n];
//     }
