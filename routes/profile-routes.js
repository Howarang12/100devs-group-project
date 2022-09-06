const router = require('express').Router()
const profileController = require('../controller/profile-controller')

//ensure authentication middleware
const authCheck = (req, res, next) => {
  if(!req.user){
    //if user is not logged in
    res.redirect('/auth/login')
  } else{
    next()
  }
} 

router.get('/', authCheck, profileController.getProfile)

module.exports = router