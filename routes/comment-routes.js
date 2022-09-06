const router = require('express').Router()
const commentController = require('../controller/comment-controller')

//create new comment
router.post('/new-comment', commentController.newComment )

//Edit a comment
router.post('/:id/edit', commentController.editComment)

//reply to comment
router.post('/:id/reply', commentController.replyComment)

//like a comment 
router.put('/:id/like', commentController.likeComment)

//delete a comment and replies
router.delete('/delete-comment', commentController.deleteComment)


module.exports = router

