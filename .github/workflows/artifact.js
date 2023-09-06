// Import modules
const fs = require("fs");

// Global variables
var github;
var context;

async function main({ g, c }) {
  github = g;
  context = c;


  const artifact = require('@actions/artifact');
  const artifactClient = artifact.create();
  const downloadResponse = await artifactClient.downloadAllArtifacts();

  // output result
  for (response in downloadResponse) {
    console.log(response.artifactName);
    console.log(response.downloadPath);
  }
}

module.exports = main;
