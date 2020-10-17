const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  let mex='Hello World 2.0!'
  res.send(mex)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
