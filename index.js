const express = require('express')
const fs = require('fs')
const util = require('util')
const fs_ls = util.promisify(fs.readdir);
const app = express()
const port = 8080

/*
app.get('/', (req, res) => {
  let mex='Hello World 2.0!'
  res.send(mex)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
*/
(async () => {
  const files = await fs_readdir('.');
  for (let fn of files) {
    console.log(fn);
  }
})().catch(err => { console.error(err); });
/* adddd */
