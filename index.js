//variable for node packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadMe = require('./generateReadMe');

//variable for array of questions
const questions = [{
        //initial questions
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    }, {
        type: "input",
        name: "gitHubUserName",
        message: "Enter GitHub username:"
    }, {
        type: "input",
        name: "emailAddress",
        message: "Enter your email address:"
    },
    //Readme section questions
    {
        type: "input",
        name: "description",
        message: "Describe motivation for project and problems it might solve:"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose license(s) for this project:",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Credits/Contributors:"
    },
    {
        type: "input",
        name: "test",
        message: "Test"
    },
    {
        type: "input",
        name: "questions",
        message: "Questions?"
    },
];

inquirer.prompt(questions).then((answers) => {
    fs.writeFile("./README.md", generateReadMe.genReadMe(answers), err => {
        if (err) throw err;
    })

});