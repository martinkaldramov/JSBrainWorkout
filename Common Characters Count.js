/*
Given two strings, find the number of common characters between them.

== Example ==

  For s1 = "aabcc" and s2 = "adcaa", the output should be
  commonCharacterCount(s1, s2) = 3.

  Strings have 3 common characters - 2 "a"s and 1 "c".

== Input/Output ==

  [time limit] 4000ms (js)
  [input] string s1

  A string consisting of lowercase latin letters a-z.

  Guaranteed constraints:
  3 ≤ s1.length ≤ 15.

  *[input] string s2

    A string consisting of lowercase latin letters a-z.

    Guaranteed constraints:
    4 ≤ s2.length ≤ 15.

  *[output] - integer
*/

//***********SOLUTION**************//

function commonCharacterCount(s1, s2) {
  var commonCharacters = 0,
      s2Chars = s2.split("");

  s1.split("").forEach(function(char) {
    if(s2Chars.indexOf(char) >= 0){
      commonCharacters++;
      s2Chars.splice(s2Chars.indexOf(char), 1);
    }
  });

  return commonCharacters;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
// -> 3
console.log(commonCharacterCount("zzzz", "zzzzzzz"));
// -> 4
