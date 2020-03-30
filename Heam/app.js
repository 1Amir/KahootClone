const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('public'))

app.listen(port, () => console.log(`Heam listening on port ${port}!`))

/**app.get('/student/login', (req, res) => {

    //Google passport code
    var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

    passport.use(new GoogleStrategy({
        clientID:     GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/student/callback",
        passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
      //Store user in temp cache database
    });
      }
    ));
    })
app.get('/student/callback', (req, res) => {

 Do stuff with student google information after they've logged in
})
**/
