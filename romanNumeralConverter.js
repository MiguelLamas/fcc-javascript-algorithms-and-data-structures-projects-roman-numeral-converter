/*
JavaScript Algorithms and Data Structures Projects Roman Numeral Converter Convert the given number into a roman numeral.

Roman numerals | Arabic numerals

M = 1000
CM = 900
D = 500
CD = 400
C = 100
XC = 90
L = 50
XL = 40
X = 10
IX = 9
V = 5
IV = 4
I = 1

All roman numerals answers should be provided in upper-case.

Plan

1. Create a variable to store an object with the key:value pairs of Roman Numerals to Numbers.
2. We need to return a string with Roman Numeral characters/letters in uppercase.
3. Create a variable to store the RomanNums, so we can return.
4. We need to create a loop to go through every item (key:value pair) in the object.
5. Create a For....in loop to iterate through object.
6. Then run a While loop to check that whilst the number being passed is >= to romanToNum[key],
which is the (num)VALUE of the romanNum in the object. Then add the KEY [ROMAN NUMERAL] to roman
variable to return at the end.
7. Then we need to subtract the value of the key we just added from the num, as we iterate through
the object once again until the condition is no longer met and we break of the while loop (inner loop),
then the For...In loop.
8. Return the romanNumeral as output.


*/

function convertToRoman(num) {
    let romanToNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };

      let romanNumeral = "";
      for (let key in romanToNum) {
        while(num >= romanToNum[key]) {
            romanNumeral += key;
            num -= romanToNum[key];

        }
      }

      return romanNumeral;
  }
  
  console.log(convertToRoman(36));