const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const {mergerPdfs} = require('./pdf')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/templates/index.html"));
})

app.post('/merge', upload.array('pdfs', 2), async function (req, res, next) {
    console.log(req.files)
    let time = await mergerPdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    res.redirect(`http://localhost:3000/static/${time}.pdf`)
    // res.send({data:req.files})
  })  

app.use('/static', express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
