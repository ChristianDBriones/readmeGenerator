var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path')
var generateMarkdown = require('./utils/generateMarkdown')

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    message: "What is the title of your Project?",
    name: "title"
  },
  {
    message: "What is the description of your Project?",
    name: "description"
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(path.join(process.cwd(),fileName), data, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
 
inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
    return writeToFile("output/README.md",generateMarkdown({...answers}))
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
