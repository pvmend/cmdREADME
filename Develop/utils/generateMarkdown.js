// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge ="";
  if (license === " "){
    return " "
  } else { 
    switch(license){
      case "MIT":{
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
      }

      case "Open Data Commons":{
        licenseBadge = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
        break;
      }
      
      case 'Unlicense':{
        licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        break;
      }
      
      case 'Mozilla':{
        licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        break;
      }
     
    }
    return licenseBadge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = '';
  if(!license){
    return " "
  } else{
    switch(license){
      case "MIT" :{
        licenseLink = '[MIT License](https://opensource.org/licenses/MIT)'
        break;
      }
     
      case "Open Data Commons":{
        licenseLink = '[Open Data Commons License](https://opendatacommons.org/licenses/by/)';
        break;
      }
     
      case 'Unlicense':{
        licenseLink = '[Unlicense](http://unlicense.org/)';
        break
      }
      
      case 'Mozilla':{
        licenseLink = '[Mozilla License](https://opensource.org/licenses/MPL-2.0)'
        break;
      }
      
    }
    return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseMD = '';
  if (license === " "){
    return ""
  } else {
    licenseMD = `
  ## License

  This project is licensed under the ${renderLicenseLink(license)} license.


    `
    return licenseMD
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}
  https://github.com/${data.username}/${data.title}
  
  ## Description

  ${data.description}

  ## Table Of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation

  The following necessary dependencies must be installed to run the application properly: ${data.installation}
  
  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ${renderLicenseSection(data.license)}

 
  ## Questions

  [Github link](https://github.com/${data.username})
  ${data.email}

  ## Test

  ${data.test}



`;
}

module.exports = generateMarkdown;
