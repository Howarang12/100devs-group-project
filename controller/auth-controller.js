const passport = require('passport')

exports.login = (req, res) => {
  console.log(req.user)
  res.render('login', { user: req.user, title: 'Login'})
}

exports.logout = (req, res, next) => {
  //handle with passport
  req.logout(err => {
    if (err) { return next(err) }
    res.redirect('/')
  })  
}

exports.googleAuth = passport.authenticate('google', {
  scope: ['profile']
})

exports.googleRedirect =  (req, res) => {
  res.redirect('/')
}