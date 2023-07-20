// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer .prompt ()

const questions = [
 {
    type:'input',
    name:'Titel',
    message:'What is your project name?'
    
    },
    {
        
    type: 'checkbox',
    message: 'What license would you like?',
    name: 'license',
    choices:['Artistic license 2.0', 'MIT','BSD 3-clause "New" or "Revised" license','Boost Software License 1.0'],

    },
{
    type: 'input',
    message: 'What is your Github User name?',
    name:'Github username',
},
{
    type: 'input',
    message:'What is your email address?',
    name: 'Email Adress'

},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
