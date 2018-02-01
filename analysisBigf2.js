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


  /*var path = require('path');
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

  fs.createReadStream(jsonPath).pipe(source.input);*/

  //------------------------------------------------------------------------------
  //********************************************************************************
  //================================================================================


  // Require the core node modules.
  var chalk = require( "chalk" );
  var fileSystem = require( "fs" );
  var JSONStream = require( "JSONStream" );
  var path = require('path');


  // ----------------------------------------------------------------------------------- //
  // ----------------------------------------------------------------------------------- //
  var jsonPath = path.join(__dirname, '..', 'Analysis', 'bigf', 'bigf.json');

    // Since the stream actions are event-driven (and asynchronous), we have to wait until
  // our output stream has been closed before we can try reading it back in.

  var models = {};


      function handleFinish() {

          // When we read in the Array, we want to emit a "data" event for every item in
          // the serialized record-set. As such, we are going to use the path "*".
          var transformStream = JSONStream.parse( "*" );
          var inputStream = fileSystem.createReadStream(jsonPath);

          // Once we pipe the input stream into the TRANSFORM stream, the parser will
          // start working it's magic. We can bind to the "data" event to handle each
          // top-level item as it is parsed.
          inputStream
              .pipe( transformStream )

              // Each "data" event will emit one item in our record-set.
              .on(
                  "data",
                  function handleRecord( data ) {
                      var current = data.model;
                        if(models[current]){
                          models[current].count++;
                        }else{
                          models[current] = {};
                          models[current].count = 1;
                        }
                        console.log(`${chalk.red('counting')}`);
                      }
              )

              // Once the JSONStream has parsed all the input, let's indicate done.
              .on(
                  "end",
                  function handleEnd() {
                      var unique = 0;
                      console.log( "- - - - - - - - - - - - - - - - - - - - - - - - - - - " );
                      console.log( chalk.green( "JSONStream parsing done ..zZzZzZz.. \n" ) );
                      for(var prop in models){
                        unique++;
                        console.log(`Model ${chalk.yellow(prop)} can be found ${chalk.green(models[prop].count)} tiems in the file. \n`);
                      }
                      console.log(`There are total of ${unique} unique models in the file`);
                  }
              )
          ;

      }

      handleFinish();
