const fs = require('fs');

// Global variables
var github;
var context;


/**
 * Main function
 * @param {Object} g         - github object from actions/github-script
 * @param {Object} c         - context object from actions/github-script
 * @return {Object} results  - object to use in `trim-inactive-members.js`
 */
async function main({ g, c }) {
  github = g;
  context = c;

  const data = {"names": ["cnk","angieyan","ykim25","vanyanv","t-will-gillis"]}
  writeData(data)
}
  function writeData(data){
  
  const filepath = 'github-actions/test-runs/data.json';


  fs.writeFile(filepath, JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log('-------------------------------------------------------');
    console.log("File 'data.json' saved successfully!");
   });
}

module.exports = main;
