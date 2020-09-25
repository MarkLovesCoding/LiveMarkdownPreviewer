const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const sass = require('node-sass');

var router = express.Router()

app.use(express.static(process.cwd()+'/dist'));
app.use(express.static(process.cwd()+'/public/'));
app.use(cors())

app.get('/',(req,res)=>{
  res.sendFile(process.cwd() + '/dist/markdown.html' );
});


var listener = app.listen(port,()=>{
  console.log("Listening on "+ port)

})
