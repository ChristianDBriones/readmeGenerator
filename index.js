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

{
    message: "What are the table of contents for your project",
    name: "Table of contents"
},

  {
    message: "What are the installation instructions for your Project?",
    name: "installation"
  },

  {
    message: "What will the project be used for?",
    name: "usage"
  },

  {
    message: "Which license is being used for this project?",
    name: "License"
  },

  {
    message: "What are the contribution guidelines for this project?",
    name: "Contributing"
  },

  {
    message: "What are the tests in your project?",
    name: "Tests"
  },

  {
    message: "What are the Questions in your project?",
    name: "Questions"
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
