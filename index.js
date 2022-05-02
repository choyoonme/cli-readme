const inquirer = require('inquirer');
const ListPrompt = require('inquirer/lib/prompts/list');

const questions = [{
        //initial questions
        type: "input",
        name: "title",
        message: "Enter name of your repository:"
    }, {
        type: "input",
        name: "gitHubUserName",
        message: "Enter GitHub username:"
    }, {
        type: "input",
        name: "gitHubLink",
        message: "Provide link to GitHub profile:"
    }, {
        type: "input",
        name: "emailAddress",
        message: "Enter your email address:"
    },
    //Readme section questions
    {
        type: "input",
        name: "description",
        message: "Enter brief description of project:"
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "List a Table of Contents, if any:"
    },
    {
        type: "input",
        name: "installation",
        message: "Briefly describe installation process:"
    },
    {
        type: "input",
        name: "usage",
        message: "Briefly describe usage of project:"
    },
    {
        type: "list",
        name: "license",
        message: "License:",
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
        message: "Name of contributor(s):"
    },
    {
        type: "input",
        name: "tests",
        message: "Test?"
    },
    {
        type: "input",
        name: "questions",
        message: "Any questions?"
    },
];


inquirer.prompt(questions).then((answers) => {
    console.log(answers.message);
});