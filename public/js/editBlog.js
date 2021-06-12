const editBlog = async(event) => {
    console.log("editBlog");
    event.preventDefault();

    const id = event.target.getAttribute("data-id");
    const body = document.querySelector("input[name='post-body']").value;
    const title = document.querySelector("input[name='post-title']").value;

    console.log(body, title, id);


    if(title && body) {
    const response = await fetch(`/api/blogs/edit/${id}`, {
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
console.log("loaded editBlog js file");
