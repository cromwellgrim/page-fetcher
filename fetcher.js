const fs = require('fs');
const request = require('request');

let args = process.argv.slice(2);
let url = args[0];
let path = args[1];

request(url, function (error, response, body) {
  // console.log('error: ', error);
  // console.log('body:', body); // Print the HTML for the example.edu page.
  // console.log('response: ', response.statusCode);
  if (error) {
    console.log('url error achieved ', error);
  }
  
  fs.writeFile(path, body, (writeError) => {
    if (writeError) { 
      console.log('error achieved', writeError)
      return;
     } else {
       console.log(`Downloaded and saved ${body.length} to ${path}.`);
       return;
     }
  }); 

});



// const breedDetailsFromFile = function(breed, callback) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     console.log("In readFile's Callback: it has the data.");
//     // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
//     if (!error) callback(data);
//   });
//   // ISSUE: Attempting to return data out here will also not work.
//   //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
// };