const express = require('express');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//google OAuth...
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, OAUTH_CALLBACK_URL } = require('./serverside/config/oauth.js');

//access to middlewares...
const authController = require('./serverside/controllers/authController.js');
const userController = require('./serverside/controllers/userController.js');

//passport setup....
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: OAUTH_CALLBACK_URL
},
  (accessToken, refreshToken, profile, cb) => {
    userController.getUser(profile.id, user => {
      if (user) {
        cb(null, user);
      } else {
        userController.postUser(profile.id, profile.displayName, profile._json.image.url, user => {
          cb(null, user);
        })
      }
    })
  }
));

//server setup...
const players = require('./routes/players');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();


//serve static files...
// Serve static files
app.use(bodyParser.json());
app.use('/players', players);
app.use((err, req, res, next) => {
  res.json(err);
});

app.use('/', express.static(path.join(__dirname, '/dist/')));

//base route...
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

//route for our internal account system sign up? 
//PLACEHOLDER: for now just routing to Google OAuth...
app.get('/signup', (req,res) => {
  res.redirect('/signin');
})

//Google OAuth process start...
app.get('/signin', passport.authenticate('google', { scope: ['profile'] }));

//passback with Authorization Code from Google...
app.get('/signin/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
   (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/daily');
  });

//database user check, pull info and send to client...
app.get('/daily', authController.verifyUser, userController.getSchedule, (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/home.html'));
})

//CHANGED: combined month long calendar with daily schedule
// pull month long event data from res.locals set in '/daily'...
// app.get('/monthly', (req,res) => {
//   res.send();
// })

//save player's intent to attend OR not attend practice...
app.post('/rsvp', (req,res) => {
  res.send();

})


//total sidenote, what are these used for?
// const colors = require('colors');
// const session = require('express-session');

const server = app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}...`)
);
