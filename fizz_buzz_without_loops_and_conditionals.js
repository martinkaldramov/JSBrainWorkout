var counter = 0;

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

const continuationCheck = () => {
  return counter < 100 || 'stop';   
}

const printNumbersRecursive = () => {
  counter++;
  var check = {};
  check.condition = {
    'stop': function(){
      return;  
    }
  }
  var output = "";
  output += (AB(counter) || B(counter) || A(counter) || counter);
  console.log(output);

  return check.condition[continuationCheck()] || printNumbersRecursive();
}

printNumbersRecursive();
