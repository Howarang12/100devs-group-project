const express = require('express')
const router = express.Router()
const authController = require('../controller/auth-controller')
const passport = require('passport')

router.use(express.static('public'))

//auth login 
router.get('/login', authController.login)

//auth logout
router.get('/logout', authController.logout)

//auth with google
router.get('/google', authController.googleAuth)

//callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), authController.googleRedirect)

module.exports = router