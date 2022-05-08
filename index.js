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
        message: "The application will be invoked by using the following command:"
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
        name: "contribution",
        message: "Credits/Contributors:"
    },
    {
        type: "input",
        name: "tests",
        message: "Test instructions:"
    },
    {
        name: "done",
        message: "OK! Your README has been generated!"
    }
];

inquirer.prompt(questions).then((answers) => {
    fs.writeFile("./README.md", generateReadMe.genReadMe(answers), err => {
        if (err) throw err;
    })

});