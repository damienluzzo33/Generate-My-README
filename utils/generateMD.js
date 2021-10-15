// Define global variable
let title, description1, description2, description3, description4, installation, usage, license, features, contribution, tests, screenshotData, collaboratorData, assetsData, tutorialsData;
// Set rendered variables to be empty strings
let renderedSS = "";
let renderedA = "";
let renderedC = "";
let renderedT = "";
// Create function to render screenshots from the user entries
function renderScreenshots(array) {
    // as long as the array is not empty
    if (array.length !== 0) {
        // add subheader
        renderedSS = renderedSS + `Screenshots:`
        // for each screenshot in the array, extract the data and concat the data to the renderedSS string
        for (let screenshot of array) {
            let name = screenshot.ssReference;
            let path = screenshot.ssPath;
            renderedSS = renderedSS + `

![${name}](${path})`
        }
    }
    return renderedSS;
};
// Create function to render collaborator data
function renderCollaborators(array) {
    // as long as the array is not empty
    if (array.length !== 0) {
        // add subheader
        renderedC = renderedC + `Collaborators:`
        // for each collaborator in the array, extract the data and concat the data to the renderedC string
        for (let collaborator of array) {
            let name = collaborator.cName;
            let path = collaborator.cLink;
            renderedC = renderedC + `
+ [${name}](${path})`
        }
    }
    return renderedC;
};
// Create function to render asset data
function renderAssets(array) {
    // as long as the array is not empty
    if (array.length !== 0) {
        // add subheader
        renderedA = renderedA + `Assets:`
        // for each asset in the array, extract the data and concat the data to the renderedA string
        for (let asset of array) {
            let name = asset.assetName;
            let author = asset.assetAuthor;
            let path = asset.assetLink;
            renderedA = renderedA + `
+ [${name} by ${author}](${path})`
        }
    }
    return renderedA;
};
// Create function to render tutorials
function renderTutorials(array) {
    // as long as the array is not empty
    if (array.length !== 0) {
        // add subheader
        renderedT = renderedT + `Tutorials:`
        // for each tutorial in the array, extract the data and concat the data to the renderedT string
        for (let tutorial of array) {
            let text = tutorial.ref;
            let path = tutorial.path;
            renderedT = renderedT + `
+ [${text}](${path})`
        }
    }
    return renderedT;
};
// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'Apache 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === 'Boost Software License 1.0') {
        return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    } else if (license === 'BSD 3-Clause') {
        return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    } else if (license === 'BSD 2-Clause') {
        return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
    } else if (license === 'CC0-1.0') {
        return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    } else if (license === 'CC BY 4.0') {
        return `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`;
    } else if (license === 'CC BY-SA 4.0') {
        return `[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)`;
    } else if (license === 'CC BY-NC 4.0') {
        return `[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)`;
    } else if (license === 'CC BY-ND 4.0') {
        return `[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)`;
    } else if (license === 'CC BY-NC-SA 4.0') {
        return `[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)`;
    } else if (license === 'CC BY-NC-ND 4.0') {
        return `[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)`;
    } else if (license === 'Eclipse Public License 1.0') {
        return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    } else if (license === 'GNU GPL v3') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license === 'GNU GPL v2') {
        return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    } else if (license === 'GNU AGPL v3') {
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    } else if (license === 'GNU LGPL v3') {
        return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    } else if (license === 'GNU FDL v1.3') {
        return `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)`;
    } else if (license === 'IPL 1.0') {
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    } else if (license === 'ICL') {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    } else if (license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === 'MPL 2.0') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    } else if (license === 'Open Data Commons Attribution') {
        return `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`;
    } else if (license === 'ODbL') {
        return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`;
    } else if (license === 'PDDL') {
        return `[![License: PDDL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`;
    } else if (license === 'Artistic-2.0') {
        return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
    } else if (license === 'Open Font-1.1') {
        return `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`;
    } else if (license === 'Unlicense') {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    } else if (license === 'WTFPL') {
        return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
    } else if (license === 'Zlib') {
        return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
    } else {
        return `None`
    };
};
// Create a function to generate markdown text for README
function generateMarkdown(entry) {
    // Break apart the returned array of data
    var q1 = entry.firstQuestions;
    var q2 = entry.screenshots;
    var q3 = entry.collaborators;
    var q4 = entry.assets;
    var q5 = entry.tutorials;
    var q6 = entry.finalQuestions;
    // Parse the data from the user entry and reassign global variables to appropriate piece of entry data
    title = q1.title;
    description1 = q1.description1;
    description2 = q1.description2;
    description3 = q1.description3;
    description4 = q1.description4;
    installation = q1.installation;
    usage = q1.usage;
    screenshotData = renderScreenshots(q2);
    collaboratorData = renderCollaborators(q3);
    assetsData = renderAssets(q4);
    tutorialsData = renderTutorials(q5);
    license = renderLicenseBadge(q6.license);
    features = q6.features;
    contribution = q6.howOthersContribute;
    tests = q6.tests;
    // return the dynamic data using variables assigned above
    return `
# ${title}

## Description

- ${description1}
- ${description2}
- ${description3}
- ${description4}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Examples/Tests](#examples)

## Installation

- ${installation}

## Usage

- ${usage}

${renderedSS}

## Credits

${collaboratorData}

${assetsData}

${tutorialsData}

## License

${license}

## Features

${features}

## How to Contribute

${contribution}

## Examples

${tests}
`
}
// export the generate markdown function
module.exports = generateMarkdown;
