// // Create a function that sees if the user wants to add a screenshot
// function screenshotYN() {
//     inquirer
//         .prompt([
//             {
//                 type: 'confirm',
//                 name: 'wantScreenshot',
//                 message: 'Would you like to add screenshots of your project? ',
//             }
//         ])
//         .then((second) => {
//             if (second.wantScreenshot) screenshotInquiry();
//             else {
//                 console.log(allData);
//             }
//         })
// }

// // Create a function that prompts and grabs the screenshot information the user inputs
// function screenshotInquiry() {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'ssReference',
//                 message: 'Enter reference text for the screenshot: ',
//                 validate: validator
//             },
//             {
//                 type: 'input',
//                 name: 'ssPath',
//                 message: 'Enter the path to the local file for the associated screenshot image: ',
//                 validate: validator
//             },
//             {
//                 type: 'confirm',
//                 name: 'screenshotMore',
//                 message: 'Would you like to enter another screenshot? '
//             }
//         ])
//         .then((answers) => {
//             screenShots.push([answers.ssReference, answers.ssPath]);
//             if (answers.screenshotMore) screenshotInquiry();
//             else {
//                 console.log(screenShots);
//                 allData.push(screenShots);
//             }
//         });
// };


// // store collaborator questions in an array
// function collaboratorYN() {
//     inquirer
//     .prompt([
//         {
//             type: 'confirm',
//             name: 'collaboratorWant',
//             message: 'Did you work with any other developers/collaborators on this project? '
//         },
//     ])
//     .then((third) => {
//         if (third.collaboratorWant) collaboratorInquiry();
//         else console.log(allData);
//     })
// }

// // Create a function that prompts and grabs the collaborator info that the user inputs
// function collaboratorInquiry() {
//     inquirer
//         .prompt([
//             {
//                 type: 'text',
//                 name: 'cName',
//                 message: 'Enter the name of the collaborator:',
//                 validate: validator
//             },
//             {
//                 type: 'input',
//                 name: 'cLink',
//                 message: "Enter a link to the collaborator's GitHub account (or their primary web-presence url):",
//                 validate: validator
//             },
//             {
//                 type: 'confirm',
//                 name: 'collaboratorMore',
//                 message: 'Are there any more collaborators that you would like to add? '
//             }
//         ])
//         .then((info) => {
//             allCollaborators.push([info.cName, info.cLink]);
//             if (info.collaboratorMore) collaboratorInquiry();
//             else {
//                 console.log(allCollaborators);
//                 allData.push(allCollaborators);
//             }
//         });
// };

// function assetsYN() {
//     inquirer
//     .prompt([
//         {
//             type: 'confirm',
//             name: 'assetWant',
//             message: 'Did you use any third-party assets to make this project? '
//         }
//     ])
//     .then((fourth) => {
//         if (fourth.assetWant) assetInquiry();
//         else console.log(allData);
//     })
// }

// // Create a function that prompts and grabs the info of the assets the user used
// function assetInquiry() {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'assetName',
//                 message: 'What is the name of the asset you used? ',
//                 validate: validator
//             },
//             {
//                 type: 'input',
//                 name: 'assetAuthor',
//                 message: 'Enter the name of the individual/entity responsible for the third-party asset being credited: ',
//                 validate: validator
//             },
//             {
//                 type: 'input',
//                 name: 'assetLink',
//                 message: "Enter a link to the individual/entity's primary web-presence url (e.g. Twitter, GitHub): ",
//                 validate: validator
//             },
//             {
//                 type: 'confirm',
//                 name: 'assetMore',
//                 message: 'Would you like to enter another asset? '
//             }
//         ])
//         .then((description) => {
//             allAssets.push([description.assetName, description.assetAuthor, description.assetLink]);
//             if (description.assetMore) assetInquiry();
//             else {
//                 console.log(allAssets);
//                 allData.push(allAssets);
//             }
//         });
// };

// function tutorialYN() {
//     inquirer
//         .prompt([
//             {
//                 type: 'confirm',
//                 name: 'tutorialWant',
//                 message: 'Did you utilize any tutorials or guides to complete this project? '
//             }
//         ])
//         .then((fifth) => {
//             if (fifth.tutorialWant) tutorialInquiry();
//             else console.log(allData);
//         })
// }

// // Create a function that prompts and grabs the tutorial information the user inputs
// function tutorialInquiry() {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'tutReference',
//                 message: 'Enter reference text for the tutorial/guide:',
//                 validate: validator
//             },
//             {
//                 type: 'input',
//                 name: 'tutPath',
//                 message: 'Enter the url for the associated tutorial/guide:',
//                 validate: validator
//             },
//             {
//                 type: 'confirm',
//                 name: 'tutMore',
//                 message: 'Would you like to enter another tutorial/guide? '
//             }
//         ])
//         .then((reference) => {
//             tutorialsArr.push([reference.tutReference, reference.tutPath]);
//             if (reference.tutMore) tutorialInquiry();
//             else {
//                 console.log(tutorialsArr);
//                 allData.push(tutorialsArr);
//             }
//         });
// };


// // prompt the user with the final questions needs for the README markdown document
// function finalQuestions() {
//     inquirer
//         .prompt([
//             {
//                 type: 'list',
//                 name: 'license',
//                 message: 'Choose your open source license:',
//                 choices: [
//                     "Apache 2.0",
//                     "Boost Software License 1.0",
//                     "BSD 3-Clause",
//                     "BSD 2-Clause",
//                     "CC0-1.0",
//                     "CC BY 4.0",
//                     "CC BY-SA 4.0",
//                     "CC BY-NC 4.0",
//                     "CC BY-ND 4.0",
//                     "CC BY-NC-SA 4.0",
//                     "CC BY-NC-ND 4.0",
//                     "Eclipse Public License 1.0",
//                     "GNU GPL v3",
//                     "GNU GPL v2",
//                     "GNU AGPL v3",
//                     "GNU LGPL v3",
//                     "GNU FDL v1.3",
//                     "IPL 1.0",
//                     "ICL",
//                     "MIT",
//                     "MPL 2.0",
//                     "Open Data Commons Attribution",
//                     "ODbL",
//                     "PDDL",
//                     "Artistic-2.0",
//                     "Open Font-1.1",
//                     "Unlicense",
//                     "WTFPL",
//                     "Zlib"
//                 ],
//                 default: "MIT"
//             },
//             {
//                 type: 'input',
//                 name: 'features',
//                 message: 'Explain the current features of your project one feature at a time (you will be prompted with the option to enter more)?',
//                 validate: validator
//             },
//             {
//                 type: 'input',
//                 name: 'howOthersContribute',
//                 message: 'How can other developers contribute to this project? ',
//                 validate: validator
//             },
//             {
//                 type: 'input',
//                 name: 'tests',
//                 message: 'Provide at least one test/example for how to use your project here: ',
//                 validate: validator
//             }
//         ])
//         .then((sixth) => {
//             console.log(sixth);
//             allData.push(sixth);
//             console.log(allData);
//         })
// }