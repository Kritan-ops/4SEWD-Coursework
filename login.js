// Login Form
document.getElementById("loginForm").addEventListener("submit", function (event) {

    // Prevent form from refreshing the page
    event.preventDefault();

    // Get input values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Check if fields are empty
    if (email === "" || password === "") {
        alert("Please enter both Email and Password.");
        return;
    }

    // Example Login Credentials
    const validEmail = "admin@gmail.com";
    const validPassword = "admin123";

    if (email === validEmail && password === validPassword) {
        alert("Login Successful!");
        window.location.href = "Dashboard.html";
    } else {
        alert("Invalid Email or Password!");
    }

});


// Forgot Password
document.getElementById("forgotPassword").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "ForgotPassword.html";
});


// Sign Up
document.getElementById("signup").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "Signup.html";
});