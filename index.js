const inquirer = require('inquirer');

//prompt user for name
//ask what language they speak
//print "greeting name"

const questions = [{
        type: 'input',
        name: 'name',
        message: 'what is your first name?',
        validate(value) {
            const pass = value.length > 0;
            if (pass) {
                return true;
            }
            return 'cannot leave blank';
        },

    },
    {
        type: 'list',
        name: 'language',
        message: 'what language do you speak?',
        choices: ['english', 'spanish', 'korean', 'swedish'],

    },

];

inquirer.prompt(questions).then((answers) => {
    if (answers.language === 'korean') {
        console.log('ahnyong', answers.name);
    }
    if (answers.language === 'swedish') {
        console.log('hej', answers.name)
    }
    if (answers.name === 'phil') {
        console.log('hey boss!');
    }

})