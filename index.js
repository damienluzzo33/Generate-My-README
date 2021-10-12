const { prompt } = require('inquirer');
var inquirer = require('inquirer');
let firstAnswers = [];
let screenShots = [];

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? "
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description for your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "Provide instructions for how users can install your project:"
        },
        {
            type: "input",
            name: "usage",
            message: "Provide an explanation for how to use your app:"
        },
        {
            type: "input",
            name: "credits",
            message: "Please list off your collaborators (separated by commas), if any:"
        },
        {
            type: "input",
            name: "assets",
            message: "Please list off the third-party assets that were used in this project (separated by commas):"
        },
        {
            type: "input",
            name: "features",
            message: "What are the current features of your project (separated by commas)?"
        },
        {
            type: "input",
            name: "tutorials",
            message: "Provide links to any tutorials that were used (separated by commas):"
        },
        {
            type: "input",
            name: "contribution",
            message: "How can other developers contribute to your project?"
        },
        {
            type: "number",
            name: "screenshotNum",
            message: "How many screenshots would you like to add? (maximum: 4)"
        }
    ]).then((answers) => {
        firstAnswers = answers;
        console.log(firstAnswers);
        screenShotGenerator();
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
    });

function screenShotGenerator() {
    console.log(firstAnswers.screenshotNum);
    if (firstAnswers.screenshotNum > 4) {
        firstAnswers.screenshotNum = 4;
    }
    if (firstAnswers.screenshotNum !== 0) {
        getScreenShot1();
    }
}

function getScreenShot1() {
    inquirer.prompt([
        {
            type: 'text',
            name: `screenshotRef`,
            message: 'Enter reference text for the screenshot:'
        },
        {
            type: "input",
            name: `screenshotUrl`,
            message: "Enter a link url to the associated screenshot image:"
        }
    ])
    .then((screenshot) => {
        console.log(screenshot);
        screenShots.push(screenshot);
        console.log(screenShots);
        if (firstAnswers.screenshotNum > 1) {
            getScreenShot2();
        }
    })
}

function getScreenShot2() {
    inquirer.prompt([
        {
            type: 'text',
            name: `screenshotRef`,
            message: 'Enter reference text for the screenshot:'
        },
        {
            type: "input",
            name: `screenshotUrl`,
            message: "Enter a link url to the associated screenshot image:"
        }
    ])
    .then((screenshot) => {
        console.log(screenshot);
        screenShots.push(screenshot);
        console.log(screenShots);
        if (firstAnswers.screenshotNum > 2) {
            getScreenShot3();
        }
    })
}

function getScreenShot3() {
    inquirer.prompt([
        {
            type: 'text',
            name: `screenshotRef`,
            message: 'Enter reference text for the screenshot:'
        },
        {
            type: "input",
            name: `screenshotUrl`,
            message: "Enter a link url to the associated screenshot image:"
        }
    ])
    .then((screenshot) => {
        console.log(screenshot);
        screenShots.push(screenshot);
        console.log(screenShots);
        if (firstAnswers.screenshotNum > 3) {
            getScreenShot4();
        }
    })
}

function getScreenShot4() {
    inquirer.prompt([
        {
            type: 'text',
            name: `screenshotRef`,
            message: 'Enter reference text for the screenshot:'
        },
        {
            type: "input",
            name: `screenshotUrl`,
            message: "Enter a link url to the associated screenshot image:"
        }
    ])
    .then((screenshot) => {
        console.log(screenshot);
        screenShots.push(screenshot);
        console.log(screenShots);
    })
}

