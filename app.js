// modules
const readline = require('readline');

// devs
const dev = "colepz"
const secondDev = "c4wasinnocent"

// github + licenses
const githubLink = "https://github.com/ColePZ/jstem"
const License = "MIT License"
const licenseLink = "https://github.com/ColePZ/jstem/blob/master/LICENSE"

// versions
let version = "0.23"
let latestVersion = "0.23"

// other things
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

console.log(
    `You are using jstem by ${dev} and ${secondDev}
    jstem is licensed under the ${License}, which you can check permissions of use here: ${licenseLink}`
)

rl.question('What is your name?', (name) => {
    // TODO: Log the answer in a database
    console.log(`Your name is set as: ${name}`);
  
    rl.close();
});