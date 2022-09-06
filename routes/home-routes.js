const router = require('express').Router()
const Comment = require('../models/comment-model')
const Reply = require('../models/reply-model')

router.get('/', async (req, res) => {
    try{
      //show newest comment first 
      const commentList = await Comment.find().sort({date: -1})
      const replies = await Reply.find().sort({date: -1})
      res.render('home', { user: req.user, title: 'Home', commentList, replies})
      
  } catch(err){
      console.log(err)
  }
})

module.exports = router