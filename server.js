const express = require('express');
const path = require('path');
const passport = require('passport');

//access to middlewares...
const authController = require('./serverside/controllers/authController.js');
const userController = require('./serverside/controllers/userController.js');

//server setup...
const PORT = process.env.PORT || 3000;
const app = express();
const server = app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}...`)
);

//serve static files...
app.use('/', express.static(path.join(__dirname, '/dist/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

//Google Oauth question, should these be post reqs? 
app.get('/signup', (req,res) => {
  res.redirect('/signin');
})

//main OAuth process --- we have passport but I need to come back
//to this and set up our other basic routes
app.get('/signin', authController.OAuth, (req,res) => {
  res.redirect('/daily');
})

//database user check
app.get('/daily', userController.getSchedule, (req,res) => {
  res.send();
})

//pull month long event data from googleAPI feedback
//saved to res.locals...
app.get('/monthly', (req,res) => {
  res.send();
})

//
app.post('/rsvp', (req,res) => {
  res.send();

})




