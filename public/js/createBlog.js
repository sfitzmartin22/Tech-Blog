const createBlogHandler = async(event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const body = document.querySelector('#blog-body').value.trim();
    

    const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({title, body}),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to create new post');
    }
};

document.querySelector('#submit').addEventListener('click', createBlogHandler);

