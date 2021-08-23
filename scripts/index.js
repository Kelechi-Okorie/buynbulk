const fs = require('fs');
const path = require('path');



const data = fs.readFileSync(path.join(__dirname, "../src/adapters/faker/constants.js"), 'utf8');



// console.log(jsonData);

fs.writeFileSync(path.join(__dirname, "../src/adapters/faker/constants.json"), JSON.stringify(data, null, '\t'));