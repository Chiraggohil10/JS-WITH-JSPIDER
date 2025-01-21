let username = document.getElementById("uname")
let password = document.getElementById("pwd")
let eye = document.getElementById("eye")
let login = document.getElementById("login")


eye.addEventListener('click', (e) => {
    if (password.type == "password") {
        password.type = "text"
    }
    else {
        password.type = "password"
    }
})

login.addEventListener('click', (e) => {
    if (username.value == "abcd" && password.value == "1234") {
        alert("Login Succesfully")
    }
    else {
        alert("Login failed")
    }
})

// function show() {
//     if (password.type == "password") {
//         password.type = "text"
//     }
//     else {
//         password.type = "password"
//     }
// }

// function login() {
//     if (username.value == "abcd" && password.value == "1234") {
//         alert("Login Succesfully")
//     }
//     else {
//         alert("Login failed")
//     }
// }