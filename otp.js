function generateOTP() {
    // Generate a random number between 100000 and 999999
    let otp = Math.floor(100000+Math.random() * 900000);
    return otp;
}

let otp = generateOTP();
console.log("Your OTP is: " + otp);