const deleteBtns = document.querySelectorAll('.delete-btn');
const replyBtns = document.querySelectorAll('.reply-btn')
const cancelBtns = document.querySelectorAll('.cancel-btn')


Array.from(deleteBtns).forEach(btn =>{
    btn.addEventListener("click", deleteComment)
})

Array.from(cancelBtns).forEach(btn =>{
    btn.addEventListener("click", hideReplyForm)
})

Array.from(replyBtns).forEach(btn =>{
    btn.addEventListener("click", showReplyForm)
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

function showReplyForm(e){
    e.preventDefault()
    let form = this.parentElement.parentElement.nextSibling.nextSibling
    form.style.display = 'block' 
}

function hideReplyForm(e){
    e.preventDefault()
    let form = this.parentElement
    form.style.display ='none'
}