//create a function that returns the total sum of a number starting from 4 to 40.
let s=0;
function sum(n1,n2) {
    for(let i=n1;i<=n2;i++){
        s=s+i;
    }
    return s;
}
sum(4,40);
console.log("Sum is :"+s);

console.log("=================");

//create a function that prints smallest integer from 35 to 98 in the case of prime number

function isPrime(num) {
    if (num <= 1){
        return false;
    } 
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

function findSmallestPrimeInRange(start, end) {
    for (let i = start; i <= end; i++) {
        let res=isPrime(i);
        if (res==true) {
            return i;
        }
    }
    return null;
}
let start=35;
let end = 98;
let results=findSmallestPrimeInRange(start,end);
console.log("The smallest prime number between "+start+" and "+end+" is :"+results);
 
console.log("=================");

//create a function the text two arg email and password and return succesfull message if the condition is true and else return false
let email="gohilchirag90994@email.com"
let password="Admin@123"
function pass(e,p) {
    if (e==email && p==password) {
        console.log("Login Successful..");
    }
    else{
        console.log("Email And Password Are Incorrect..");
    }
}
let e="gohilchirag90994@email.com"
let p="Admin@123"
pass(e,p);

console.log("=================");


//print even number with num decrease in js
function even() {
    let num=10;
    for (let i = 1; i <= 10; i++) {
        if (i%2==0) {
            console.log(i);
            num--;
        }
    }
    return num;
}
let data=even();
console.log(data);

console.log("=================");

//sum of odd number 0 to 99
function odd(s,e) {
    let sum=0;
    for (let i=s;i<=e;i++) {
        if (i%2!=0) {
            sum=sum+i;
        }
    }
    return sum;
}
let total=odd(0,99);
console.log(total);

console.log("=================");

//count total number of even from 0 to 99
function counteven(s,e) {
    let count=0;
    for (let i = s; i<=e; i++){
        if (i%2==0) {
            count++;
        }
    }
    return count;
}
let res=counteven(0,99);
console.log(res);

console.log("=================");

//prime number between 0 to 100


function Prime(num) {
    if (num <= 1){
        return false;
    } 
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

function findPrimeInRange(start, end) {
    for (let i = start; i <= end; i++) {
        let res=Prime(i);
        if (res==true) {
            console.log(i+" ");
        }
    }
    return null;
}
findPrimeInRange(0,100);

console.log("=================");

let name="Chirag";
let age=22;
let Email="gohilchirag90994@email.com";
let Password="Admin@123";
let phone=9099423494;

function check(E,P) {
    if (E==Email && P==Password) {
        console.log("Successfull Login");
        if (age>30) {
            console.log("Rate Of Interest : 20%");
        }
        else if (age>=21) {
            console.log("Rate Of Interest : 30%");
        }
        else{
            console.log("Not Eligible For Loan"); 
        }
    }
    else{
        console.log("Incorrect Email and Password");
    }
}
let E="gohilchirag90994@email.com";
let P="Admin@123";
check(E,P);





