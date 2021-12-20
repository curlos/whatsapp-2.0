const express = require('express')
const router = express.Router()
const passport = require('passport')

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

router.get('/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

router.get( '/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/auth/protected',
    failureRedirect: '/auth/google/failure'
  })
);

router.get('/protected', isLoggedIn, (req, res) => {
  console.log(req.user)
  res.send(`Hello ${req.user.displayName}`);
});

router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
});

router.get('/google/failure', (req, res) => {
  console.log('FUCK')
  res.send('Failed to authenticate..');
});


module.exports = router