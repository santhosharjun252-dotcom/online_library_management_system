// ==========================================
// Online Library Management System
// login.js
// ==========================================

// Show / Hide Password

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");

    }

});

// ================================
// Login Form Validation
// ================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const passwordValue = document.getElementById("password").value.trim();

    // Email Validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        alert("Please enter your email.");

        return;

    }

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }

    // Password Validation

    if (passwordValue === "") {

        alert("Please enter your password.");

        return;

    }

    if (passwordValue.length < 6) {

        alert("Password must contain at least 6 characters.");

        return;

    }

    // Demo Login Success

    alert("Login Successful!");

    // Store demo user information

    localStorage.setItem("userEmail", email);

    // Redirect to Dashboard

    window.location.href = "dashboard.html";

});

// ================================
// Input Focus Effect
// ================================

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", function () {

        this.style.borderColor = "#2563eb";

    });

    input.addEventListener("blur", function () {

        this.style.borderColor = "#ccc";

    });

});

// ================================
// Remember Me
// ================================

const rememberMe = document.querySelector(
    'input[type="checkbox"]'
);

rememberMe.addEventListener("change", function () {

    if (this.checked) {

        console.log("Remember Me Enabled");

    } else {

        console.log("Remember Me Disabled");

    }

});

// ================================
// Social Login Buttons (Demo)
// ================================

const googleBtn = document.querySelector(".google");
const facebookBtn = document.querySelector(".facebook");

googleBtn.addEventListener("click", function () {

    alert("Google Login will be available after backend integration.");

});

facebookBtn.addEventListener("click", function () {

    alert("Facebook Login will be available after backend integration.");

});

// ================================
// Forgot Password Link
// ================================

const forgotPassword = document.querySelector(".options a");

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    alert(
        "Forgot Password feature will be available after backend integration."
    );

});

// ================================
// Welcome Message
// ================================

window.addEventListener("load", function () {

    console.log("Login Page Loaded Successfully");

});