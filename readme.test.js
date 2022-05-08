const generateReadMe = require('./generateReadMe');

describe("license", () => {
    it("should return a markdown image tag", () => {
        expect(generateReadMe.license("MIT")).toEqual("![MIT](https://img.shields.io/badge/license-MIT-green.svg)");
    });
});

describe("readme", () => {
    it("should render user input into readme file", () => {
        expect(generateReadMe.genReadMe({
            title: "project",
            description: "project",
            installation: "node index.js",
            usage: "command line",
            license: "MIT",
            contribution: "names",
            tests: "this",
            questions: "email",
            emailAddress: "mrfake@gmail.com",
            gitHubUserName: "mrfakeagain"
        })).toEqual(`![MIT](https://img.shields.io/badge/license-MIT-green.svg)
# project

# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Test](#test)
7. [Questions](#questions)

# Description
project

# Usage
command line

# Installation
node index.js

# Contributing
names

# Test
this

# Questions
email
Email me with any questions at mrfake@gmail.com.

Find me on Github: [mrfakeagain](http://www.github.com/mrfakeagain)

`);
    });
});