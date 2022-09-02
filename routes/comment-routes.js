const router = require('express').Router()
const Comment = require('../models/comment-model')

router.post('/new-comment', async (req, res)=>{
  try{
      await Comment.create(
        { username: req.user.username,
          googleId: req.user.googleId, 
          thumbnail: req.user.thumbnail, 
          comment: req.body.comment, 
          date: Date.now(),
          likes: [] 
        })
      console.log('Comment added')
      res.redirect('/')
  }catch(err){
      console.log(err)
  }
} )


module.exports = router

