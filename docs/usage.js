const fs = require('fs');
const path = require('path');
const createFCSObjFromDocs = require('./index.js');

createFCSObjFromDocs("./README.md")
  .then(result => {
    console.log(result);
    fs.writeFileSync(path.join(__dirname, "services.json"), JSON.stringify(result), "utf8");
    // Your code using result here
  })
  .catch(err => {
    console.error(err);
  });