/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

== Example ==

  For n = 1230, the output should be
  isLucky(n) = true;
  For n = 239017, the output should be
  isLucky(n) = false.

== Input/Output ==

  [time limit] 4000ms (js)

  *[input] integer n

    A ticket number represented as a positive integer with an even number of digits.

    Guaranteed constraints:
    10 ≤ n < 106.

  *[output] boolean

    true if n is a lucky ticket number, false otherwise.
 */

 //***********SOLUTION**************//

function isLucky(n) {
  var numArray = n.toString().split(""),
      firstHalfSum = 0,
      secondHalfSum = 0;

  for (var i = 0; i < numArray.length / 2; i++) {
    firstHalfSum += parseInt(numArray[i]);
    secondHalfSum += parseInt(numArray[numArray.length / 2 + i]);
  }

  return firstHalfSum == secondHalfSum;
}

console.log(isLucky(1230));
// -> true
console.log(isLucky(239017));
// -> false
console.log(isLucky(134008));
// -> true
