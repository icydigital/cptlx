const test = require('tape');
const createFCSObjFromDocs = require('./index.js')

function hasSameKeys(arr) {
    const firstKeys = Object.keys(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      const currentKeys = Object.keys(arr[i]);
      if (firstKeys.length !== currentKeys.length || !firstKeys.every(key => currentKeys.includes(key))) {
        return false;
      }
    }
    return true;
};

test('test if financial services object is ...', async function (t) {
    const result = await createFCSObjFromDocs("./README.md");
    // console.log(result)
    t.ok(result, "obj is truthy");
    const services = JSON.parse(result); // Try parsing the data as JSON
    t.ok(services, "services array is truthy")
    t.pass("services is a valid JSON");
    t.true(hasSameKeys(services), "objects have same keys")
    t.end()
});