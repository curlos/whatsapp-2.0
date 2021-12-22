const express = require('express')
const router = express.Router()
const passport = require('passport')

const CLIENT_URL = process.env.CLIENT_URL

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

router.get("/login/success", (req, res) => {
  
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failure", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get('/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

router.get( '/google/callback',
  passport.authenticate( 'google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/auth/login/failure'
  })
);

router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
});


module.exports = router