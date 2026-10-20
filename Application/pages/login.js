let savedUsername = "";
let savedPassword = "";

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

function showSignup() {
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
    loginForm.style.display = "none";
    signupForm.style.display = "block";
}

function showLogin() {
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
    signupForm.style.display = "none";
    loginForm.style.display = "block";
}

function signup() {
    let name = document.getElementById("name").value.trim();
    savedUsername = document.getElementById("signupUsername").value.trim();
    savedPassword = document.getElementById("signupPassword").value.trim();

    if (name == "" || savedUsername == "" || savedPassword == "") {
        alert("Please fill in all fields.");
        return;
    }

    const user = { name, username: savedUsername, password: savedPassword };
    localStorage.setItem("studentUser", JSON.stringify(user));
    alert("Account created successfully!");
    showLogin();
}

function login() {
    let username = document.getElementById("loginUsername").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    const savedUser = JSON.parse(localStorage.getItem("studentUser") || "null");

    if (username == savedUsername && password == savedPassword) {
        alert("Login successful! Welcome " + username + "!");
        window.location.href = "welcome.html";
    } else if (savedUser && savedUser.username === username && savedUser.password === password) {
        alert("Login successful! Welcome " + username + "!");
        window.location.href = "welcome.html";
    } else {
        alert("Wrong username or password.");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const savedUser = JSON.parse(localStorage.getItem("studentUser") || "null");
    if (savedUser) {
        savedUsername = savedUser.username;
        savedPassword = savedUser.password;
    }
    showLogin();
});
