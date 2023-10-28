// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be used to install dependencies?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can a user contribute to the repository?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be used to run tests?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of licence should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return FileSystem.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
