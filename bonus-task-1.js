const A = (input) => {
  var condition = input%3;
  var check = {};
  check.A = {
    0: 'A'
  }

  return check.A[condition] || false;
}

const B = (input) => {
  var condition = input%5;
  var check = {};
  check.B = {
    0: 'B'
  }

  return check.B[condition] || false;
}

const AB = (input) => {
  var condition = !(A(input) && B(input)) || 0;
  var check = {};
  check.AB = {
    0: 'AB'
  }

  return check.AB[condition] || false;
}

for (var n = 1; n <= 100; n++) {
  var output = "";
  output += (AB(n) || B(n) || A(n) || n);
  console.log(output);
}
