/*
Given the string, check if it is a palindrome(string that reads the same left-to-right and right-to-left).

== Example ==

  For inputString = "aabaa", the output should be
  checkPalindrome(inputString) = true;
  For inputString = "abac", the output should be
  checkPalindrome(inputString) = false;
  For inputString = "a", the output should be
  checkPalindrome(inputString) = true.

== Input/Output ==

  * [input] string inputString
      A non-empty string consisting of lowercase characters.

  * [output] boolean
      true if inputString is a palindrome, false otherwise.
*/

//***********SOLUTION**************//

function checkPalindrome(inputString) {
    var reverseArray = inputString.split("").reverse();
    var stringArray = inputString.split("");
    for (var i = 0; i < stringArray.length; i++) {
      if (stringArray[i] != reverseArray[i]) {
        return false;
      }
    }
    return true;
}

console.log(checkPalindrome("aabaa"));
// true
console.log(checkPalindrome("abac"));
// false
console.log(checkPalindrome("a"));
// true
console.log(checkPalindrome("az"));
// false
