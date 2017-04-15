/*
After becoming famous, CodeBots decided to move to a new building and live together.
The building is represented by a rectangular matrix of rooms, each cell containing
an integer - the price of the room. Some rooms are free (their cost is 0), but that's
probably because they are haunted, so all the bots are afraid of them. That is why any
room that is free or is located anywhere below a free room in the same column is not
considered suitable for the bots.

Help the bots calculate the total price of all the rooms that are suitable for them.

== Example ==

  For

  matrix = [[0, 1, 1, 2],
            [0, 5, 0, 0],
            [2, 0, 3, 3]]
  the output should be
  matrixElementsSum(matrix) = 9.

  Here's the rooms matrix with unsuitable rooms marked with 'x':

  [[x, 1, 1, 2],
   [x, 5, x, x],
   [x, x, x, x]]
  Thus, the answer is 1 + 5 + 1 + 2 = 9.

== Input/Output ==

  *[input] array.array.integer matrix

    2-dimensional array of integers representing a rectangular matrix of the building.

    Guaranteed constraints:
    1 ≤ matrix.length ≤ 5,
    1 ≤ matrix[i].length ≤ 5,
    0 ≤ matrix[i][j] ≤ 10.

  *[output] integer
*/

function matrixElementsSum(matrix) {
  var total = 0;

  function checkSuitability(rooms) {
    var total = 0;
    for (var i = rooms.length - 1; i >= 0 ; i--) {
      if (rooms[i - 1] == 0 || rooms[i - 2] == 0) {
        rooms[i] = 0;
      }
      total += rooms[i];
    }
    return total;
  }

  matrix[0].map(function(_, i) {
    var floor = [];
    matrix.forEach(function(row) {
      floor.push(row[i]);
    });

    total += checkSuitability(floor);
  });

  return total;
}

var matrix = [[0,1,1,2],
              [0,5,0,0],
              [2,0,3,3]];
console.log(matrixElementsSum(matrix));
// 9

var matrix2 = [[1,1,1,0],
               [0,5,0,1],
               [2,1,3,10]];
console.log(matrixElementsSum(matrix2));
// 9

var matrix3 = [[1,1,1],
               [2,2,2],
               [3,3,3]];
console.log(matrixElementsSum(matrix3));
// 18

var matrix4 = [[0]];
console.log(matrixElementsSum(matrix4));
// 0
