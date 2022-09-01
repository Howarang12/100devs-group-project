const express = require('express')
const authRoutes = require('./routes/auth-routes')
const profileRoutes = require('./routes/profile-routes')
const passportSetup = require('./config/passport-setup')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')

const app = express()

//set view engine
app.set('view engine', 'ejs')

//serve static files
app.use(express.static('public'))

//connect mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log('connected to mongodb...')
})

app.use(session({
  secret: keys.session.cookieKey,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: keys.mongodb.dbURI })
}))

//initialize passport
app.use(passport.initialize())
app.use(passport.session())


//set up routes
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

//home route
app.get('/', (req, res) => {
  res.render('home', { user: req.user, title: 'Home' })
})


app.listen(3000, console.log('Server running...'))