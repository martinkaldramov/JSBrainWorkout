for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "A";
  if (n % 5 == 0)
    output += "B";
  console.log(output || n);
}
