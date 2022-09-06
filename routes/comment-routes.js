const router = require('express').Router()
const Comment = require('../models/comment-model')
const Reply = require('../models/reply-model')

router.post('/new-comment', async (req, res)=>{
  try{
      await Comment.create(
        { username: req.user.username,
          googleId: req.user.googleId, 
          thumbnail: req.user.thumbnail, 
          comment: req.body.comment, 
          date: new Date().toLocaleString(),
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
    //delete replies to comment
    await Reply.deleteMany({commentId: req.body.commentId})
    //delete comment itself
    await Comment.findByIdAndDelete({ _id: req.body.commentId})
    res.json('Deleted comment from server')
  } catch(err) {
    console.log(err)
  }
})

//reply to comment
router.post('/:id/reply', async (req, res) => {
  //find which comment to reply to
  const id = req.params.id
  const reply = new Reply({
    username: req.user.username,
    googleId: req.user.googleId,
    thumbnail: req.user.thumbnail,
    reply: req.body.reply,
    date: Date.now(),
    likes: [],
    commentId: id 
  })
  //save reply
  await reply.save()
  const targetComment = await Comment.findById(id)
  targetComment.replies.push(reply)
  //save and redirect
  await targetComment.save(function(err){
    if(err) console.log(err)
    res.redirect('/')
  })
})


module.exports = router

