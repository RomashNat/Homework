function validateEmail()
{
    const email = document.getElementById("inputEmail");
    email.addEventListener("input", () => 
    {
        if (email.validity.typeMismatch) 
            email.setCustomValidity("Ожидалась почта"); 
        else
            email.setCustomValidity(""); 
    });
}

function validatePassword()
{
    const checkPassword = new RegExp('^[a-zA-Z0-9_.-]*$')
    const password = document.getElementById('inputPassword');
    password.addEventListener("input", () =>
    {
        console.log(checkPassword.exec(password.value));
        if (checkPassword.exec(password.value) == null)
            password.setCustomValidity("В пароле недопустимые символы. Можно вводить a-zA-Z0-9_.-");
        else
        {
            if (password.value.length >= 7)
                password.setCustomValidity("");
            else
                password.setCustomValidity("Пароль должен быть больше 7 символов");
        }
    });
}

validateEmail();
validatePassword();