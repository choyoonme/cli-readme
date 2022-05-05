function license(badge) {
    return `[![${badge}](https://img.shields.io/badge/license-${badge}-green.svg)]`
}

const genReadMe = obj => {

    // description, installation instructions, usage information, contribution guidelines, and test instructions
    let output =
        `
    # ${obj.title}
    
    ## Table of Contents
    ${obj.tableOfContents}

    ## DESCRIPTION:
    ${obj.description}

    ## INSTALLATION:
    ${obj.installation}

    ## License:
    ${license(obj.license)}
    
  
    ## Contributions:
    ${obj.contribution}

    ## Test:
    ${obj.tests}

    # Questions:
    ${obj.questions}
    ${obj.emailAddress}
    ${obj.gitHubUserName}
    ${obj.gitHubLink}
    
    `
    return output;
}

module.exports = genReadMe;