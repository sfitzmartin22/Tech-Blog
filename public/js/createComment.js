const createCommentHandler = async(event) => {
    event.preventDefault();

    const body = document.querySelector('#comment-body').value.trim();
    const blog_id = document.querySelector('#submit').getAttribute('data-blog_id');    
    const user_id = document.querySelector('#submit').getAttribute('data-user_id');

    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({body, blog_id, user_id}),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to create new comment');
    }
};

document.querySelector('#submit').addEventListener('click', createCommentHandler);