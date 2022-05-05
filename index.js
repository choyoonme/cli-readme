// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

//variable for node packages
const inquirer = require("inquirer");
const fs = require("fs");
const genReadMe = require("./generateReadMe");

//variable for array of questions
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
    fs.writeFile("./README.md", genReadMe(answers), err => {
        if (err) throw err;
    })

});