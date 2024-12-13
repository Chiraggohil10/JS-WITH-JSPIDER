let username = document.getElementById("uname")
let password = document.getElementById("pwd")

function show() {
    if (password.type == "password") {
        password.type = "text"
    }
    else {
        password.type = "password"
    }
}

function login() {
    if (username.value == "abcd" && password.value == "1234") {
        alert("Login Succesfully")
    }
    else {
        alert("Login failed")
    }
}