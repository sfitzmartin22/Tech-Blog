const deleteBlog = async(event) => {
    event.preventDefault();

    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE"
    });

    if(response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Blog was not deleted");
    }
};

document.querySelector("#delete").addEventListener("click", deleteBlog);