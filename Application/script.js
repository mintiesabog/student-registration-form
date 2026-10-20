const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

function showSignup() {
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
}

function showLogin() {
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
}

function signup() {
    const name = document.getElementById("name").value.trim();
    const username = document.getElementById("signupUsername").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (!name || !username || !email || !password) {
        alert("Please complete all sign-up fields.");
        return;
    }

    const user = { name, username, email, password };
    localStorage.setItem("studentUser", JSON.stringify(user));
    alert("Account created successfully!");

    document.getElementById("name").value = "";
    document.getElementById("signupUsername").value = "";
    document.getElementById("email").value = "";
    document.getElementById("signupPassword").value = "";

    showLogin();
}

function login() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!username || !password) {
        alert("Please enter your username and password.");
        return;
    }

    const savedUser = JSON.parse(localStorage.getItem("studentUser") || "null");

    if (!savedUser) {
        alert("No registered account found. Please sign up first.");
        return;
    }

    if (savedUser.username === username && savedUser.password === password) {
        window.location.href = "pages/welcome.html";
    } else {
        alert("Invalid username or password.");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    showLogin();
});
