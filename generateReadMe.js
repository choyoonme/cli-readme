function license(badge) {
    return `[![${badge}](https://img.shields.io/badge/license-${badge}-green.svg)]`
}

const genReadMe = obj => {

    // description, installation instructions, usage information, contribution guidelines, and test instructions
    let output =
        `
    # ${obj.title}
    
    ## Table of Contents
    [Description](#description)
    [Installation](#installation)
    [Usage](#usage)
    [License](#license)
    [Contributing](#contributing)
    [Test](#test)
    [Questions](#questions)

    ## Description
    ${obj.description}

    ## Installation
    ${obj.installation}

    ## License
    ${license(obj.license)}

    ## Contributing
    ${obj.contribution}

    ## Test
    ${obj.tests}

    # Questions
    ${obj.questions}<br/>
    Email me with any questions at ${obj.emailAddress}.<br/>
    Find me on Github: [${obj.gitHubUserName}](http://www.github.com/${obj.gitHubUserName})<br/>
    
    `
    return output;
}

module.exports = genReadMe;