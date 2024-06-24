const fs = require('fs');

function createFCSObjFromDocs(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const sections = [];
      // let firstLevelSection = '';
      // let secondLevelSection = '';
      // let thirdLevelSection = '';
      // let fourthLevelSection = '';

      for (const line of data.split('\n')) {
        // if (line.startsWith('# ')) {
        //   firstLevelSection = line.toLowerCase().trim().replace(/^(.){2}/,'').replace(/\W/g, '_');
        //   sections[firstLevelSection] = sections[firstLevelSection] || {}; 
        // } 
        // if (line.startsWith('## ')) {
        //   secondLevelSection = line.toLowerCase().trim().replace(/^(.){3}/,'').replace(/\W/g, '_')
        //   sections[firstLevelSection][secondLevelSection] = sections[firstLevelSection][secondLevelSection] || {};
        // } 
        // if (line.startsWith('### ')) {
        //   thirdLevelSection = line.toLowerCase().trim().replace(/^(.){4}/,'').replace(/\W/g, '_')
        //   sections[firstLevelSection][secondLevelSection][thirdLevelSection] = sections[firstLevelSection][secondLevelSection][thirdLevelSection] || {};
        // } 
        // if (line.startsWith('#### ')) {
        //   fourthLevelSection = line.toLowerCase().trim().replace(/^(.){5}/,'').replace(/\W/g, '_')
        //    sections[firstLevelSection][secondLevelSection][thirdLevelSection][fourthLevelSection] = sections[firstLevelSection][secondLevelSection][thirdLevelSection][fourthLevelSection] || {};
        // } 
        if (line.startsWith('[')) {
          let closingBracketIndex = line.indexOf(']');
          let preKey = line.substring(0, closingBracketIndex + 1);
          const keyRegex = /\*\*([^:]+)/; 
          let keyMatch = preKey.match(keyRegex); 
            if (keyMatch) {
              let serviceKey = keyMatch[1];
              let serviceValue = line.substring(closingBracketIndex + 1); 
              sections.push({"service": serviceKey, "description": serviceValue})
          }
        }
      }
      resolve(JSON.stringify(sections));
    });
  });
}

module.exports = createFCSObjFromDocs