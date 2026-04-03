function showLogin() {
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}

function showRegister() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
}

function validateRegister() {
    let name = document.getElementById("rname").value;
    let email = document.getElementById("remail").value;
    let password = document.getElementById("rpassword").value;
    let phone = document.getElementById("rphone").value;

    if (name === "" || email === "" || password === "" || phone === "") {
        alert("All fields required!");
        return;
    }

    if (!email.includes("@")) {
        alert("Invalid email!");
        return;
    }

    if (password.length < 6) {
        alert("Password must be 6+ characters!");
        return;
    }

    if (isNaN(phone) || phone.length != 10) {
        alert("Enter valid 10-digit phone!");
        return;
    }

    alert("Registration Successful!");
}

function validateLogin() {
    let email = document.getElementById("lemail").value;
    let password = document.getElementById("lpassword").value;

    if (email === "" || password === "") {
        alert("All fields required!");
        return;
    }

    if (!email.includes("@")) {
        alert("Invalid email!");
        return;
    }

    if (password.length < 6) {
        alert("Invalid password!");
        return;
    }

    alert("Login Successful!");
}