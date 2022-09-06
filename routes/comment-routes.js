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
          likes: [],
          reply: []
        })
      console.log('Comment added')
      res.redirect('/')
  }catch(err){
      console.log(err)
  }
} )

router.delete('/delete-comment', async (req, res) => {
  try{
    await Comment.findByIdAndDelete({ _id: req.body.commentId})
    res.json('Deleted comment from server')
  } catch(err) {
    console.log(err)
  }
})


module.exports = router

