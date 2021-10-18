// Include packages needed for this application (fs and inquirer)
let inquirer = require('inquirer');
let generateMarkdown = require('./utils/generateMD');
let fs = require('fs');
let fileName = "README.md";
// Define global variables
let screenShots = [];
let allCollaborators = [];
let allAssets = [];
let tutorialsArr = [];
let allFeatures = [];
let allData = {
    firstQuestions: {},
    screenshots: [],
    collaborators: [],
    assets: [],
    tutorials: [],
    projectFeatures: [],
    finalQuestions: {}
};
// define first set of questions to be passed in when init function runs inquirer.prompt()
const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'What is the title of your project? ',
		validate: validator
	},
	{
		type: 'input',
		name: 'description1',
		message: 'Description Part 1 of 4: What was your motivation for this project?',
		validate: validator
	},
    {
		type: 'input',
		name: 'description2',
		message: 'Description Part 2 of 4: Why did you build this project?',
		validate: validator
	},
    {
		type: 'input',
		name: 'description3',
		message: 'Description Part 3 of 4: What problem does your project address/solve?',
		validate: validator
	},
    {
		type: 'input',
		name: 'description4',
		message: 'Description Part 4 of 4: What did you learn from this project?',
		validate: validator
	},
	{
		type: 'input',
		name: 'installation',
		message: 'Provide instructions for how users can install your project:',
		validate: validator
	},
	{
		type: 'input',
		name: 'usage',
		message: 'Provide an explanation for how to use your app:',
		validate: validator
    }
];
// create function for generalized validation for questions that are required for the README
function validator(response) {
    // Make sure the response is not a number, and that it exists
	let validation = response && isNaN(response) ? true : 'This response is required! Try again!'
	return validation;
};
// create function for Y or N validation for boolean responses
function validatorBoolean(response) {
    // make sure the lowercase response is a "y" or an "n" 
    let validation = response && isNaN(response) && (response.toLowerCase() === 'y' || response.toLowerCase() === 'n') ? true : "This response is required and you need to answer with a 'y' or an 'n'. Try again!"
    return validation;
}
// Create a function that sees if the user wants to add a screenshot
function screenshotYN() {
    // see if user wants to add a screenshot
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'wantScreenshot',
                message: 'Would you like to add screenshots of your project? ',
                validate: validatorBoolean
            }
        ])
        .then((second) => {
            // if they want to add a screenshot, we call the screenshot inquiry function
            if (second.wantScreenshot) screenshotInquiry();
            // otherwise we move on to the next question in the survey
            else collaboratorYN();
        });
};
// Create a function that prompts and grabs the screenshot information the user inputs
function screenshotInquiry() {
    // prompt user with questions about the screenshot they are adding
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'ssReference',
                message: 'Enter reference text for the screenshot: ',
                validate: validator
            },
            {
                type: 'input',
                name: 'ssPath',
                message: 'Enter the path to the local file for the associated screenshot image: ',
                validate: validator
            },
            {
                type: 'confirm',
                name: 'screenshotMore',
                message: 'Would you like to enter another screenshot? ',
                validate: validatorBoolean
            }
        ])
        .then((answers) => {
            // push new screenshot data onto the screeShots array
            screenShots.push([answers.ssReference, answers.ssPath]);
            // if the user answers yes, we recursively call the function until they have no more screenshots to add
            if (answers.screenshotMore) screenshotInquiry();
            else {
                // otherwise we move on to the next question in the survey and push the screenShots array onto the allData array
                allData.screenshots = screenShots;
                collaboratorYN();
            }
        });
};
// Create a function that sees if the user wants to add a collaborator
function collaboratorYN() {
    // see if user wants to add a collaborator
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'collaboratorWant',
                message: 'Did you work with any other developers/collaborators on this project? ',
                validate: validatorBoolean
            },
        ])
        .then((third) => {
            // if they do, we call the collaborator inquiry function
            if (third.collaboratorWant) collaboratorInquiry();
            // otherwise we move on to the next question in the survey
            else assetsYN();
        });
};
// Create a function that prompts and grabs the collaborator info that the user inputs
function collaboratorInquiry() {
    // prompt user with questions about the collaborator they are adding
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'cName',
                message: 'Enter the name of the collaborator:',
                validate: validator
            },
            {
                type: 'input',
                name: 'cLink',
                message: "Enter a link to the collaborator's GitHub account (or their primary web-presence url):",
                validate: validator
            },
            {
                type: 'confirm',
                name: 'collaboratorMore',
                message: 'Are there any more collaborators that you would like to add? ',
                validate: validatorBoolean
            }
        ])
        .then((info) => {
            // push new collaborator data onto the collaborators array
            allCollaborators.push([info.cName, info.cLink]);
            // if the user answers yes, we recursively call the function until they have no more collaborators to add
            if (info.collaboratorMore) collaboratorInquiry();
            // otherwise we move on to the next question in the survey and push the collaborators array onto the allData array
            else {
                allData.collaborators = allCollaborators;
                assetsYN();
            }
        });
};
// Create a function that sees if the user wants to add an asset
function assetsYN() {
    // see if user wants to add an asset
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'assetWant',
                message: 'Did you use any third-party assets to make this project? ',
                validate: validatorBoolean
            }
        ])
        .then((fourth) => {
            // if they do, we call the asset inquiry function
            if (fourth.assetWant) assetInquiry();
            // otherwise we move on to the next question in the survey
            else tutorialYN();
        });
};
// Create a function that prompts and grabs the info of the assets the user used
function assetInquiry() {
    // prompt user with questions about the asset they are adding
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'assetName',
                message: 'What is the name of the asset you used? ',
                validate: validator
            },
            {
                type: 'input',
                name: 'assetAuthor',
                message: 'Enter the name of the individual/entity responsible for the third-party asset being credited: ',
                validate: validator
            },
            {
                type: 'input',
                name: 'assetLink',
                message: "Enter a link to the individual/entity's primary web-presence url (e.g. Twitter, GitHub): ",
                validate: validator
            },
            {
                type: 'confirm',
                name: 'assetMore',
                message: 'Would you like to enter another asset? ',
                validate: validatorBoolean
            }
        ])
        // push new asset data onto the assets array
        .then((description) => {
            allAssets.push([description.assetName, description.assetAuthor, description.assetLink]);
            // if the user answers yes, we recursively call the function until they have no more assets to add
            if (description.assetMore) assetInquiry();
            // otherwise we move on to the next question in the survey and push the assets array onto the allData array
            else {
                allData.assets = allAssets;
                tutorialYN();
            }
        });
};
// Create a function that sees if the user wants to add a tutorial
function tutorialYN() {
    // see if user wants to add a tutorial
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'tutorialWant',
                message: 'Did you utilize any tutorials or guides to complete this project? ',
                validate: validatorBoolean
            }
        ])
        .then((fifth) => {
            // if they do, we call the tutorial inquiry function
            if (fifth.tutorialWant) tutorialInquiry();
            // otherwise we move on to the next question in the survey
            else finalQuestions();
        });
};
// Create a function that prompts and grabs the tutorial information the user inputs
function tutorialInquiry() {
    // prompt user with questions about the tutorial they are adding
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'tutReference',
                message: 'Enter reference text for the tutorial/guide:',
                validate: validator
            },
            {
                type: 'input',
                name: 'tutPath',
                message: 'Enter the url for the associated tutorial/guide:',
                validate: validator
            },
            {
                type: 'confirm',
                name: 'tutMore',
                message: 'Would you like to enter another tutorial/guide? ',
                validate: validatorBoolean
            }
        ])
        // push new tutorial data onto the assets array
        .then((reference) => {
            tutorialsArr.push({ref: reference.tutReference, path: reference.tutPath});
            // if the user answers yes, we recursively call the function until they have no more tutorials to add
            if (reference.tutMore) tutorialInquiry();
            // otherwise we move on to the final questions in the survey and push the tutorials array onto the allData array
            else {
                allData.tutorials = tutorialsArr;
                featureInquiry();
            }
        });
};
// Create a function that prompts and grabs the features the user used, and let them add as many as they want 
function featureInquiry() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'features',
                message: 'Explain the current features of your project one feature at a time (you will be prompted with the option to enter more)?',
                validate: validator
            },
            {
                type: "confirm",
                name: "moreFeatures",
                message: "Would you like to add another feature? ",
                validate: validatorBoolean
            }
        ]).then((feature) => {
            allFeatures.push({feat: feature.features})
            if (feature.moreFeatures) featureInquiry();
            else {
                allData.projectFeatures = allFeatures;
                finalQuestions();
            } 
        })
}
// Create a function that prompts and grabs, respectively, the final questions and data
function finalQuestions() {
    // prompt the user with the final questions needs for the README markdown document
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'license',
                message: 'Choose your open source license:',
                choices: [
                    "Apache 2.0",
                    "Boost Software License 1.0",
                    "BSD 3-Clause",
                    "BSD 2-Clause",
                    "CC0-1.0",
                    "CC BY 4.0",
                    "CC BY-SA 4.0",
                    "CC BY-NC 4.0",
                    "CC BY-ND 4.0",
                    "CC BY-NC-SA 4.0",
                    "CC BY-NC-ND 4.0",
                    "Eclipse Public License 1.0",
                    "GNU GPL v3",
                    "GNU GPL v2",
                    "GNU AGPL v3",
                    "GNU LGPL v3",
                    "GNU FDL v1.3",
                    "IPL 1.0",
                    "ICL",
                    "MIT",
                    "MPL 2.0",
                    "Open Data Commons Attribution",
                    "ODbL",
                    "PDDL",
                    "Artistic-2.0",
                    "Open Font-1.1",
                    "Unlicense",
                    "WTFPL",
                    "Zlib"
                ],
                default: "MIT"
            },
            {
                type: 'input',
                name: 'howOthersContribute',
                message: 'How can other developers contribute to this project? ',
                validate: validator
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Provide at least one test/example for how to use your project here: ',
                validate: validator
            }
        ])
        // then we take that response, push it on the allData array and call out function to write the file
        .then((sixth) => {
            allData.finalQuestions = sixth;
            // calling the generateMArkdown function with all of data passed in, as the second argument
            writeToFile(fileName, generateMarkdown(allData));
        })
}
// Create a function to initialize app
function init() {
    // prompt user with the first set of questions
	inquirer
        .prompt(questions)
        // then push that new data onto the allData array and call the next prompt with the screenshotYN function
        .then((first) => {
            allData.firstQuestions = first;
            screenshotYN();
		})
        .catch((error) => {
			if (error.isTtyError) console.log("Prompts cannot be rendered in the current environment");
			else console.log("We're not sure what went wrong! Restart the console and try again!");
		});
}
// Create a function to write README file
function writeToFile(fileName, data) {
    // use fs to create a README.md file with the returned data
    fs.writeFile(fileName, `${data}`, (err) => {
        err ? console.log(err) : console.log("It works!")
    })
}
// Function call to initialize app
init();
