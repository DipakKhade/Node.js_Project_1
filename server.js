const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
import Merger_ from './mergerTest'


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'templates/index.html'))
   
})

app.post('/merge', upload.array('pdfs',3), function (req, res, next) {
  console.log(req.files)
  res.send({data:req.files})

  Merger_(path.join(__dirname,req.file.path[0].path),path.join(__dirname,req.file.path[1].path))
  
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



