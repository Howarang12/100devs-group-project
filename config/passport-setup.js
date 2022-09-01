const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys')
const User = require('../models/user-model')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user))
})

passport.use(new GoogleStrategy({
  //options for google strategy
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: "/auth/google/redirect"
  },
  //passport callback function
  (accessToken, refreshToken, profile, done) => {
    //check if user exists in db
    User.findOne({ googleId: profile.id }).then((currentUser) => {
      if(currentUser){
        //already have user
        console.log('user is: ' + currentUser)
        done(null, currentUser)
      } else {
        //if not, create new user in our db
        new User({
          username: profile.displayName,
          googleId: profile.id,
          thumbnail: profile._json.picture
        }).save()
          .then(newUser => {
            console.log('new user created: ' + newUser)
            done(null, newUser)
          })
      }
    })
  }
));