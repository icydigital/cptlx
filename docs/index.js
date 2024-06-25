const fs = require('fs');

function createFCSObjFromDocs(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const sections = [];
      for (const line of data.split('\n')) {
        if (line.startsWith('[')) {
          const [, serviceKey] = line.match(/\*\*([^:]+)/);
          const serviceValue = line.slice(line.indexOf(']') + 1).trim();
          const linkMatch = serviceValue.match(/^\(https?:\/\/www\.[^)]+\)/);
          if (linkMatch) {
            const serviceLink = linkMatch[0];
            const serviceDescription = serviceValue.slice(linkMatch.index + serviceLink.length).trim();
            sections.push({ service: serviceKey, link: serviceLink, description: serviceDescription });
          }
        }
      }
      resolve(JSON.stringify(sections));
    });
  });
}

module.exports = createFCSObjFromDocs;