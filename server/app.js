const path = require('path')
const express = require('express')
const app = express();
const router = require('./controllers')

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//From FE side 
app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

app.use(express.json())

app.use(express.urlencoded())
app.use(router)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
})

module.exports = app