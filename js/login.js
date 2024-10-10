var body = document.querySelector("body");
var singUpButton = document.querySelector("#singUp");
var singInButton = document.querySelector("#singIn");
var registerButton = document.querySelector("#register");

body.onload = function() {
    body.className = "on-load";
};

singUpButton.addEventListener("click", function() {
    body.className = "sing-up";
});

singInButton.addEventListener("click", function() {
    body.className = "sing-in";
});

registerButton.addEventListener("click", function(event) {
    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirm-password"]').value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    const requestBody = {
        email: email,
        password: password
    };

    console.log("Request Body:", requestBody);

    const urlApi = "https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com";
    fetch(urlApi + "/v1/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                throw new Error('Erro ao cadastrar: ' + (errorData.message || response.statusText));
            });
        }
        return response.json();
    })
    .then(data => {
        window.location.href = 'bem-vindo.html';
    })
    .catch(error => {
        console.error('Erro ao cadastrar:', error);
        alert(error.message);
    });
});