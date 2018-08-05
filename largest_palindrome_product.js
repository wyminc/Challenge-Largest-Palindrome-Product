/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function (digits) {
  //This repeats the amount of 9's according to how many digits is being tested to create a max number for that amount of digits
  var factor_0 = parseInt("9".repeat(digits));

  var factor_1 = 0;
  var palindromeNumber = 0;
  var prevPalin = 0;
  var prevFactor_0 = 0;
  var prevFactor_1 = 0;

  //This writes lowest number possible for the amount of digits
  if (digits === 1) {
    factor_1 = 1;
  } else {
    factor_1 = parseInt((1 + ("0".repeat(digits - 1))));
  }

  for (var i = factor_0; i > factor_1; i--) {
    for (var j = factor_0; j > factor_1; j--) {

      //parseInt((((((i * j).toString()).split("")).reverse()).join(""))) creates a number that is the reverse of i * j
      //Turns (i * j) into a string, then split each individual digit and puts them into an array
      //Reverses the array
      //Joins back the number in reverse form
      if (parseInt((((((i * j).toString()).split("")).reverse()).join(""))) === (i * j)) {

        //Sets a previous variable for palindrome number so that we can use it to compare every other palindrome created through the for loop
        prevPalin = palindromeNumber

        //Sets a previous variable for factors0/1 so that the loop can use them if it passes the next if statement
        prevFactor_0 = factor_0;
        prevFactor_1 = factor_1;

        //If statement above is checking for any palindrome, it will store the palindrome number and the respective factors
        palindromeNumber = (i * j);
        factor_0 = i;
        factor_1 = j;

        //Because the above if statement is only checking for palindromes in all possible combinations of set amounts of digits, the if statement below is comparing every prevPalindrome that is saved to the newly calculated palindrome
        //If the newly calculated palindrome is lower than the previous one, the loop changes palindrome back to its previous palindrome and changes factor0/1 back to its previous factor0/1
        if (palindromeNumber < prevPalin && prevPalin !== 0) {
          palindromeNumber = prevPalin;
          factor_0 = prevFactor_0;
          factor_1 = prevFactor_1;
        }
      }
    }
  }

  console.log(factor_0, "Factor 0");
  console.log(factor_1, "Factor 1");
  console.log(palindromeNumber, "Palindrome");

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};