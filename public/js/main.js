const deleteBtns = document.querySelectorAll('.delete-btn');
const replyBtns = document.querySelectorAll('.reply-btn')

Array.from(deleteBtns).forEach(x =>{
    x.addEventListener("click", deleteComment)
})

async function deleteComment(){
    const commentId = this.dataset.id
    console.log(commentId)
    try{
        const res = await fetch('comment/delete-comment', {
            method: "delete",
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({
                'commentId' : commentId
            })
        })
        const data = await res.json()
        console.log(data)
        location.reload()
    } catch(err){
        console.log(err)
    }
}

async function replyComment(){
    const commentId = this.dataset.id
}