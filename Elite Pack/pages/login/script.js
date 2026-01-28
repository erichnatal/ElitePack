document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById("form");

        form.addEventListener("submit", function(event) {
            const email = document.getElementById("email");
            const password = document.getElementById("password");

            if (email.value.trim() === "" || password.value.trim() === "") {
                alert("Por favor, preencha todos os campos.");
                event.preventDefault(); 
            }
        });
    });