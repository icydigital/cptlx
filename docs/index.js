const fs = require('fs');

function createFCSObjFromDocs(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const sections = {};
      let firstLevelSection = '';
      let secondLevelSection = '';
      let thirdLevelSection = '';
      let fourthLevelSection = '';

      for (const line of data.split('\n')) {
        if (line.startsWith('# ')) {
          firstLevelSection = line.toLowerCase().replace(/^(.){1}/,'').replace(/\W/g, '_').trim();
          sections[firstLevelSection] = {};
        } 
        if (line.startsWith('## ')) {
          secondLevelSection = line.toLowerCase().replace(/^(.){2}/,'').replace(/\W/g, '_').trim()
          sections[firstLevelSection][secondLevelSection] = {}
        } 
        if (line.startsWith('### ')) {
          thirdLevelSection = line.toLowerCase().replace(/^(.){3}/,'').replace(/\W/g, '_').trim()
          sections[firstLevelSection][secondLevelSection][thirdLevelSection] = {}
        } 
        if (line.startsWith('#### ')) {
          fourthLevelSection = line.toLowerCase().replace(/^(.){4}/,'').replace(/\W/g, '_').trim()
           sections[firstLevelSection][secondLevelSection][thirdLevelSection][fourthLevelSection] = {}
        } 
        // if (line.startsWith('[')) {
        //   console.log(line)
        // }
      }
      resolve(sections);
    });
  });
}

module.exports = createFCSObjFromDocs