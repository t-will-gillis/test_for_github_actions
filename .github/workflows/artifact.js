// Import modules
const fs = require("fs");

// Global variables
var github;
var context;

async function main({ g, c }, artifact) {
  github = g;
  context = c;

  console.log(artifact)
  
}

module.exports = main;
