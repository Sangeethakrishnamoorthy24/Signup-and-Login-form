document.getElementById("signup").addEventListener("click", function() {
    let password = document.getElementById("password1").value;
    const res = checkPasswordStrength(password);
    document.getElementById("password-strength").innerHTML = res;

    function checkPasswordStrength(password) {
        if (password.length < 6) {
            return "Password should be more than 6 characters";
        } else {
            let hasLetter = /[a-zA-Z]/.test(password);
            let hasDigit = /[0-9]/.test(password);
            let hasSpecial = /[!@#$%^&*()]/.test(password);
            if (hasLetter && hasDigit && hasSpecial) {
                return "Your password is Strong";
            } else {
                return "Your password is Medium";
            }
        }
    }
});

document.getElementById("login").addEventListener("click", function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username === "user" && password === "password") {
        alert("Login successful!");
    } else {
        document.getElementById("login-error").innerHTML = "Wrong password or username";
    }
});