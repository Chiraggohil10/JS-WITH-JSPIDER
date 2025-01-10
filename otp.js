function generateOTP() {
    // Generate a random number between 1000 and 9999
    let otp = Math.floor(100000+Math.random() * 9000); //
    return otp;
}

let otp = generateOTP();
console.log("Your OTP is: " + otp);