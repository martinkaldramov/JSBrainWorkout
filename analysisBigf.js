/*const fs = require('fs');
const lines = require('lines-adapter');

var pathToBigFile = __dirname + "\\bigf\\bigf.json";
console.log(__dirname + "\\bigf\\bigf.json");


const stream = fs.createReadStream(pathToBigFile);
lines(stream, 'utf8')
.on('data', line => {
    console.log(line);
  const obj = JSON.parse(line);
  line processing 
}).on('end', () => {

});





var fs = require("fs");
var path = require('path');

var jsonPath = path.join(__dirname, '..', 'Analysis', 'bigf', 'bigf.json');
console.log(jsonPath);
 
const src = fs.createReadStream(jsonPath, {
    start: 0,
    end: 100043,
    encoding: 'utf8',
    autoclose: false
});

var jsonData = "";

src.on('data', (chunk) => {
    // var data1 = chunk + ']';
    //var objects = JSON.parse(chunk);

    jsonData += chunk;
    console.log('JSON data: ' + "\n" + jsonData + "\n");
    console.log("---------------")
    // JSON.parse(data1).forEach( (element) => {
    //     console.log(`Model: ${element.serial}`);
    // });
    //console.log(`Parsed data -  ${JSON.parse(data1)[3].model} `);
    // console.log(`Parsed data -  ${data1} `);
  });
  */

  
  var path = require('path');
  var makeSource = require("stream-json");
  
  var jsonPath = path.join(__dirname, '..', 'Analysis', 'bigf', 'bigf.json');
  var source = makeSource();

  var fs = require("fs");

  var objectCounter = 0;
  source.on("startObject", function(){ ++objectCounter; console.log(objectCounter) });
  source.on("data", function(data){
    console.log(data);
  });
  source.on("end", function(){
      console.log("Found ", objectCounter, " objects.");
  });
   
  fs.createReadStream(jsonPath).pipe(source.input);

  