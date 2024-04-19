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
          firstLevelSection = line.toLowerCase().replace(/^(.){2}/,'').replace(/\W/g, '_').trim();
          sections[firstLevelSection] = sections[firstLevelSection] || {}; 
        } 
        if (line.startsWith('## ')) {
          secondLevelSection = line.toLowerCase().replace(/^(.){3}/,'').replace(/\W/g, '_').trim(1)
          sections[firstLevelSection][secondLevelSection] = sections[firstLevelSection][secondLevelSection] || {};
        } 
        if (line.startsWith('### ')) {
          thirdLevelSection = line.toLowerCase().replace(/^(.){4}/,'').replace(/\W/g, '_').trim()
          sections[firstLevelSection][secondLevelSection][thirdLevelSection] = sections[firstLevelSection][secondLevelSection][thirdLevelSection] || {};
        } 
        if (line.startsWith('#### ')) {
          fourthLevelSection = line.toLowerCase().replace(/^(.){5}/,'').replace(/\W/g, '_').trim()
           sections[firstLevelSection][secondLevelSection][thirdLevelSection][fourthLevelSection] = sections[firstLevelSection][secondLevelSection][thirdLevelSection][fourthLevelSection] || {}
        } 
        if (line.startsWith('[')) {
          let closingBracketIndex = line.indexOf(']');
          let serviceKey = line.substring(0, closingBracketIndex + 1);
          let serviceValue = line.substring(closingBracketIndex + 1); 
          console.log(serviceKey);
          console.log(serviceValue);  
          console.log({
            "key": serviceKey,
            "value": serviceValue,
            "line": line,
            "firstLevelSection": firstLevelSection, 
            "secondLevelSection": secondLevelSection, 
            "thirdLevelSection": thirdLevelSection, 
            "fourthLevelSection": fourthLevelSection
          })
          console.log(sections)
        }
      }
      resolve(sections);
    });
  });
}

module.exports = createFCSObjFromDocs