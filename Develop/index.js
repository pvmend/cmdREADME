// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [{
    name: 'title',
    message: 'What is the title of your project.',
    type: 'input',
},
{
    name:'description',
    message: 'Write a description about your project.',
    type: 'input',
},
{
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    type: 'input'
},
{
    name: 'usage',
    message: 'Provide instructions and examples for use.',
    type: 'input',
},
{
    name: 'license',
    message: 'choose a license',
    type: 'list',
    choices: ['MIT', "Open Data Commons", "Unlicense", "Mozilla"," "],
},
{
    name: 'contributing',
    message: 'Who contributed to this project',
    type: 'input',
},
{
    name: 'test',
    message:'What commands are needed to test this project?',
    type: 'input',
},
{
    name: 'username',
    message: 'What is your Github username?',
    type: 'input',
}, 
{
    name: 'email',
    message: 'What is your email?',
    type: 'input'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,function(err){
        console.log(fileName);
        console.log(data);
        if (err){
            return console.log(err);
        } else {
            console.log("SUCCESS");
        }
    });

};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data){
            writeToFile("README.md", generateMarkdown(data));
            console.log(data);
        })

}

// Function call to initialize app
init();
