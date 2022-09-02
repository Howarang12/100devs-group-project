const express = require('express')
const homeRoutes = require('./routes/home-routes')
const authRoutes = require('./routes/auth-routes')
const profileRoutes = require('./routes/profile-routes')
const commentRoutes = require('./routes/comment-routes')
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

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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
app.use('/', homeRoutes)
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)
app.use('/comment', commentRoutes)




app.listen(3000, console.log('Server running...'))