const express = require('express')
const router = express.Router()
const passport = require('passport')

router.use(express.static('public'))

//auth login 
router.get('/login', (req, res) => {
  console.log(req.user)
  res.render('login', { user: req.user, title: 'Login'})
})

//auth logout
router.get('/logout', (req, res, next) => {
  //handle with passport
  req.logout(err => {
    if (err) { return next(err) }
    res.redirect('/')
  })  
})

//auth with google
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

//callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.send(req.user)
  res.redirect('/')
})

module.exports = router