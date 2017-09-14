const
express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
passport = require('passport'),
LocalStrategy = require('passport-local'),
keys = require('./config/keys')


 mongoose.connect('mongodb://localhost/rawscience')






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listenting on ${PORT}`)
})
