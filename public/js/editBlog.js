const editBlog = async(event) => {
    event.preventDefault();

    const id = event.target.getAttribute("data-id");
    const body = document.querySelector(".card-body");
    const title = document.querySelector(".title");


    if(title && body) {
    const response = await fetch('/api/blogs/edit', {
        method: "PUT",
        body: JSON.stringify({body, title, id}),
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