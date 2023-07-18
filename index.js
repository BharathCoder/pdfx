const express = require('express')
const app = express()
const port = 3000
const { engine } = require('express-handlebars');
const path = require('path');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use('/', require('./routes/blogroutes'));
app.use(express.static("static/img"));

app.listen(port, () => {
  console.log(`Real Blog app listening on port http://localhost:${port}`)
})