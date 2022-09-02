const router = require('express').Router()
const Comment = require('../models/comment-model')

router.get('/', async (req, res) => {
    try{
      const commentList = await Comment.find()
      res.render('home', { user: req.user, title: 'Home', commentList })
  } catch(err){
      console.log(err)
  }

})

module.exports = router