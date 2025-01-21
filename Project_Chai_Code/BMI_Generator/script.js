let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // is used to prevent the default behavior of the form submit

    let height = parseInt(document.querySelector('#height').value) // parseInt is used to convert the string to integer because input box give the value in string
    let weight = parseInt(document.querySelector('#weight').value) // parseInt is used to convert the string to integer because input box give the value in string
    let results = document.querySelector("#results");

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please enter a valid Height"
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please enter a valid Weight"
    }
    else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2); //bmi means body mass index
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`
    }
})