const test = require('tape');
const createFCSObjFromDocs = require('./index.js')

test('test if financial services object is ...', async function (t) {
    const result = await createFCSObjFromDocs("./README.md");
    // console.log(result)
    t.ok(result, "obj is truthy");
});