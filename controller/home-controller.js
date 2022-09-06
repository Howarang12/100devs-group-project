const Comment = require('../models/comment-model')
const Reply = require('../models/reply-model')

exports.getHome = async (req, res) => {
  try{
    //show newest comment first 
    const commentList = await Comment.find().sort({date: -1})
    const replies = await Reply.find().sort()
    res.render('home', { user: req.user, title: 'Home', commentList, replies})
    
} catch(err){
    console.log(err)
}
}