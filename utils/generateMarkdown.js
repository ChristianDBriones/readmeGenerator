// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license == "Gpl-2.0")
  {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }
  else if (license == "MIT")
  {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (license == "Bsd-2-Clause")
  {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  }
  else {
    return ""
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   if (license == "Gpl-2.0")
  {
    return " A copyleft license that requires any changes made to the licensed software to be released under the same GPL license. There are three versions of the GPL license"
  }
  else if (license == "MIT")
  {
    return "A permissive license that allows users to do almost anything with the code as long as they provide attribution back to the author and don’t hold the author liable. This license is widely used for its simplicity and permissiveness."
  }
  else if (license == "Bsd-2-Clause")
  {
    return "A family of permissive licenses that allow users to use, modify, and distribute the licensed software. The main difference between the different BSD licenses is the number of clauses include"
  }
  else {
    return ""
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  # ${data.title}

## Description 

${data.description}


## Table of Contents (Optional)
${data.tableOfContents}

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## How to Contribute
${data.contributing}

## Tests
${data.tests}

## Questions
[link to mygithub profile](https://github.com/${data.gitHubUsername})
if you have additional questions please contact me @ ${data.email}`
}

module.exports = generateMarkdown;
