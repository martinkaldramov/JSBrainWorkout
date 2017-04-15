/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday,
each statue having an non-negative integer size. Since he likes to make things perfect,
he wants to arrange them from smallest to largest so that each statue will be bigger
than the previous one exactly by 1. He may need some additional statues to be able to accomplish that.
Help him figure out the minimum number of additional statues needed.

== Example ==

    For statues = [6, 2, 3, 8], the output should be
    makeArrayConsecutive2(statues) = 3.

    Ratiorg needs statues of sizes 4, 5 and 7.

== Input/Output ==

    *[input] array.integer statues

      An array of distinct non-negative integers.

      Guaranteed constraints:
      1 ≤ statues.length ≤ 10,
      0 ≤ statues[i] ≤ 20.

    *[output] integer

      The minimal number of statues that need to be added to existing statues such that it contains every integer
      size from an interval [L, R] (for some L, R) and no other sizes.
*/

//***********SOLUTION**************//

function makeArrayConsecutive(statues) {
  var count = 0;
  var minValue = statues.reduce(function(min, value) {
    return min < value ? min : value;
  });
  var maxValue = statues.reduce(function(max, value) {
    return max > value ? max : value;
  });

  for (var i = minValue; i <= maxValue; i++) {
    if (statues.indexOf(i) < 0) {
      count++;
    }
  }
  return count;
}

console.log(makeArrayConsecutive([6, 2, 3, 8]));
// 3
console.log(makeArrayConsecutive([0, 3]));
// 2
console.log(makeArrayConsecutive([5, 4, 6]));
// 0
console.log(makeArrayConsecutive([6, 3]));
// 2
console.log(makeArrayConsecutive([1]));
// 0
