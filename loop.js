// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(`value is ${element}`);
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 0;
// while (i < array.length){
//     const element = array[i];
//     console.log(`value is ${element}`);
//     i++;
// }

// let score = 11;  // do while loop will execute at least once time even if condition is false
// do {
//     console.log(`your score is ${score}`);
//     score++;
// } while (score <= 10);

//for of loop
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const i of arr) {
//     console.log(`value is ${i}`);
// }

// let str = "hello world";
// for (const i of str) {
//     if (i == " ") {
//         continue;
//     }
//     console.log(`char is ${i}`);
// }

// let map = new Map(); //map is a collection of key value pair and key is unique,map is method of object
// map.set("name", "jspider"); //set is used to add key value pair
// map.set("age", 20);
// map.set("address", "delhi");
// map.set("address", "mumbai");
// console.log(map.get("name")); //get is used to get value of a key
// console.log(map.size); //size is used to get size of map
// map.delete("age"); //delete is used to delete key value pair
// console.log(map.has("age")); //has is used to check if key is present or not
// console.log(map);

// for (const [key, value] of map) {
//     console.log(key,"--",value);
// }

// let obj = {
//     name: "chirag",
//     age: 20,
//     address: "banglore",
//     email: "gohilchirag90994@email.com",
//     phone: 9099423494
// }

// for (const [key, value] of Object.entries(obj)) {  //The Object.entries() method is used to convert the object into an array of key-value pairs because object is not iterable, where each pair is an array with two elements: the key and the value.
//     console.log(key, "--", value);
// }

//for in loop
// let obj = {
//     name: "chirag",
//     age: 20,
//     address: "banglore",
//     email: "gohilchirag90994@email.com",
//     phone: 9099423494
// }

// for (const key in obj){
//     console.log(key,"--",obj[key]); //By using obj[key], you're essentially accessing the value of each property in the obj object using the property name as a key,key takes on the value of each property name in the obj object (e.g., "name", "age", etc.), obj[key] is equivalent to obj["name"], obj["age"]
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const i in arr) {
//     console.log(`value is ${arr[i]}`);
// }

// let str = "hello world"; 
// for (const i in str) {
//     console.log(`char is ${str[i]}`);
// }


//for each loop
//for each method can't return any value
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach((x) => { // x is accumulator is used to traverse through every element in the array
//     console.log(`value is ${x}`);
// });

// let superheroes = ["batman", "superman", "spiderman"];
// function print(x) {
//     console.log(x);
// }
// superheroes.forEach(print); //only give function reference not function call

// let obj = [
//   {
//     name: "chirag",
//     age: 20,
//     address: "banglore",
//   },
//   {
//     name: "parth",
//     age: 20,
//     address: "surat",
//   },
//   {
//     name: "mohit",
//     age: 40,
//     address: "mumbai",
//   },
// ];

// obj.forEach((x) => {
// //   console.log(x);
//   console.log(x["name"]);
//   console.log(x.name);
// });