const router = require('express').Router()
const commentController = require('../controller/comment-controller')

//create new comment
router.post('/new-comment', commentController.newComment )

//delete a comment and replies
router.delete('/delete-comment', commentController.deleteComment)

//reply to comment
router.post('/:id/reply', commentController.replyComment)


module.exports = router

