function license(badge) {
    return `![${badge}](https://img.shields.io/badge/license-${badge}-green.svg)`
}

const genReadMe = obj => {

    // description, installation instructions, usage information, contribution guidelines, and test instructions
    let output = `${license(obj.license)}
# ${obj.title}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Test](#test)
7. [Questions](#questions)

## Description
${obj.description}

## Usage
${obj.usage}

## Installation
${obj.installation}

## Contributing
${obj.contribution}

## Test
${obj.tests}

## Questions
${obj.questions}
Email me with any questions at ${obj.emailAddress}.

Find me on Github: [${obj.gitHubUserName}](http://www.github.com/${obj.gitHubUserName})

`
    return output;
};

module.exports = {
    genReadMe,
    license,
};