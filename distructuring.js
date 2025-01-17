//object
let obj = {
    name:"atul",
    age: 30,
    skills:["web" , "java" , "python"],
    qualities:{
        speaking:"Good",
        programming:"Poor"
    }
}
//Destructuring
let {name,age,skills:[ a,b,c],qualities:{speaking,programming}} = obj
console.log(name)
console.log(age);
console.log(a);
console.log(b);
console.log(c);
console.log(speaking);
console.log(programming);


//String
let names = "CHIRAG";
// Destructuring
let [a1, a2, a3, a4, a5] = names;
console.log(a1);


//Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// Destructuring
let [fruit1, fruit2] = fruits;
console.log(fruit1);

const number = [10,20,30,50,40,60];
let [d1,d2,d3, , , ] = number;
console.log(d2);



//backtick
let new1="Chirag";
let new2="Parth";
console.log(`My Name Is ${new1}, My Brother Name Is ${new2}`);





