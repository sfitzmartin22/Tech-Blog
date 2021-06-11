const editBlog = async(event) => {
    event.preventDefault();

    const body = document.querySelector("blog-body");
    const title = document.querySelector("#blog-title");



    if(title && body) {
    const response = await fetch('/api/blogs/edit', {
        method: "PUT",
        body: JSON.stringify({body, title}),
        headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("There was an error when trying to update this blog. Please try again.");
    }
};
}

document.querySelector("#edit").addEventListener("click", editBlog);