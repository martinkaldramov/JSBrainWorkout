/*
Given an array of strings, return another array containing all of its longest strings.

== Example ==

  For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
  allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

  == Input/Output ==

    [time limit] 4000ms (js)
    *[input] array.string inputArray

      A non-empty array.

      Guaranteed constraints:
      1 ≤ inputArray.length ≤ 10,
      1 ≤ inputArray[i].length ≤ 10.

    *[output] array.string

      Array of the longest strings, stored in the same order as in the inputArray.
*/

//***********SOLUTION**************//

function allLongestStrings(inputArray) {
  var lengths = [];

  inputArray.forEach(function(element) {
    lengths.push(element.length);
  });
  var maxLength = lengths.reduce(function(max, value) {
    return Math.max(max, value);
  }, 0);

  return inputArray.filter(function(element) {
    return element.length == maxLength;
  });
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
// -> ["aba", "vcd", "aba"]
console.log(allLongestStrings(["aa"]));
// -> ["aa"]
console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"]));
// -> ["eeee", "abcd"]
