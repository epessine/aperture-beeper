const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.set('views', __dirname + '/app/views');
app.engine('html', require('ejs').renderFile);

const beeps = require('./routes/beeps');

app.use('/', beeps);

app.get('/', function (req, res)
{
    res.render('index.html');
});

mongoose
  .connect('mongodb://mongodb:27017/aperture-beeper', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log(error);
  });

app.listen(5000, () => {
  console.log("Listening!");
});
