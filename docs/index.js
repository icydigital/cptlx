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
          }  if (newLevel == 2) {
            if (newLevel == currentLevel) {
              sections[firstLevelSection][secondLevelSection] = []
              sections[firstLevelSection][secondLevelSection].push(line)
            }
            secondLevelSection = line
            sections[firstLevelSection][secondLevelSection] = {}
          } if (newLevel == 3) {
            if (newLevel == currentLevel) {
              sections[firstLevelSection][secondLevelSection][thirdLevelSection].push(line)
            } else {
            thirdLevelSection = line
            sections[firstLevelSection][secondLevelSection][thirdLevelSection] = [] 
            }
          }  if (newLevel > 3) {
            if (newLevel == currentLevel) {
              fourthLevelSection = line
              if (line.startsWith("#### ")) {
                sections[firstLevelSection][secondLevelSection][thirdLevelSection][fourthLevelSection] = []
              } 
              if (line.startsWith("[ ")) {
                sections[firstLevelSection][secondLevelSection][thirdLevelSection][fourthLevelSection].push(line)
              }
            }
          }
          console.log({
            "math1": match[1], 
            "line": line,
            "firstLevelSection": firstLevelSection,
            "secondLevelSection": secondLevelSection, 
            "thirdLevelSection": thirdLevelSection, 
            "fourthLevelSection": fourthLevelSection,
            "currentLevel": currentLevel,
            "newLevel": newLevel,
            "currentSection": currentSection
          })
          console.log(sections)
          console.log("DEBUG MODE :::")
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