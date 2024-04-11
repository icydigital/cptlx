const fs = require('fs');

function createFCSObjFromDocs(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const sections = {};
      let currentLevel = 0;
      let currentSection = '';
      let firstLevelSection = '';
      let secondLevelSection = '';
      let thirdLevelSection = '';
      let fourthLevelSection = '';

      for (const line of data.split('\n')) {
        const match = line.match(/^([#]{1,4}) (.*) |^\[/);
        if (match) {
          let newLevel = match[1] ? match[1].length : currentLevel; // Handle undefined match[1]
          if (newLevel == 1){
            firstLevelSection = line
            sections[firstLevelSection] = {}
          } else if (newLevel == 2) {
            if (newLevel == currentLevel) {
              sections[firstLevelSection][secondLevelSection] += line
            }
            secondLevelSection = line
            sections[firstLevelSection][secondLevelSection] = {}
          } else if (newLevel == 3) {
            if (newLevel == currentLevel) {
              sections[firstLevelSection][secondLevelSection][thirdLevelSection] += line
            }
            thirdLevelSection = line
            sections[firstLevelSection][secondLevelSection][thirdLevelSection] = {}
          } else if (newLevel > 3) {
            if (newLevel == currentLevel) {
              sections[firstLevelSection][secondLevelSection][thirdLevelSection][fourthLevelSection] += line
            }
            fourthLevelSection = line
            sections[firstLevelSection][secondLevelSection][thirdLevelSection][fourthLevelSection] = {}
          }
          console.log(
            { 
              "currentLevel": currentLevel, 
              "newLevel": newLevel, 
              "match": match[1], 
              "line": line
            }
          );
          currentLevel = newLevel;
        } else {
          continue;
        }
      }
      resolve(sections);
    });
  });
}

module.exports = createFCSObjFromDocs