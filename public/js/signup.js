var avatar_url = "";

const signupHandler = async(event) => {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();


    if(email && password) {
        const response = await fetch('/api/users/create', {
            method: 'POST',
            body: JSON.stringify({ email, username, password}),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            document.location.replace('/');
        } else {
            alert('ERROR there already exists an account with that email');
        }
    }
};


document.querySelector('#signup').addEventListener('submit', signupHandler);