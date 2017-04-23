/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

== Example ==

  For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
  sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

== Input/Output ==

  [time limit] 4000ms (js)

  *[input] array.integer a

    If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

    Guaranteed constraints:
    5 ≤ a.length ≤ 15,
    -1 ≤ a[i] ≤ 200.

  *[output] array.integer

    Sorted array a with all the trees untouched.
*/

//***********SOLUTION**************//

function sortByHeight(a) {
  var sorted = a.filter(function(person) {
    return person != -1;
  }).sort(function(a, b) {
    return a - b;
  });

  return a.map(function(person) {
    if(person != -1)
      return sorted.shift();
    return -1;
  });
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// -> [-1, 150, 160, 170, -1, -1, 180, 190]
console.log(sortByHeight([-1, -1, -1, -1, -1]));
// -> [-1, -1, -1, -1, -1]
console.log(sortByHeight([4, 2, 9, 11, 2, 16]));
// -> [2, 2, 4, 9, 11, 16]
