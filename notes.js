//array inbuilt method

// arr.indexof() 
// indexeof is a array inbuilt method that is used to return the index position of a specified Element in the array
// index of usees two arguments arg 1= search element arg2=strat index
// it will search for the specified element from the strating from first index position
// it will search for the specified element from the strating index position
// indexof method cant affect org array
// example :
// let arr=[12,"jspider",5,null,5,true,5,undefined];
// console.log(arr);
// let a=arr.indexOf(5)
// let a=arr.indexOf(5,3)
// console.log(a);

// arr.lastIndexOf()
// lastindexeof is a array inbuilt method that is used to return the index position of a specified Element in the array
// index of usees two arguments arg 1= search element arg2=strat index
// it will search for the specified element from the strating from last index position
// it will search for the specified element from the strating index position
// lastindexof method cant affect org array
// example :
// let arr=[12,"jspider",5,null,5,true,5,undefined];
// console.log(arr);
// let a=arr.lastIndexOf(5,3);
// let a=arr.lastIndexOf(5);
// console.log(a);



//string in js
// strings are the collection of primitive datatype of characters in js that is written inside " " or ' '
// string are immutable in js
// string have index position for each character in js
// index position strats from 0

//string inbuilt method
// let str="javascript STring"
// str.length is a special keyword that is used in js to find the total length of a string
// console.log(str.length);

// str.toUpperCase() is a method that is used to in js to return a new string that converts all the characters in to uppercase
// let str1=str.toUpperCase();
// console.log(str1);

// str.toLowerCase() is a method that is used to in js to return a new string that converts all the characters in to uppercase
// let str1=str.toLowerCase();
// console.log(str1);

// str.split(" ") is a method that is used in js to return a new string that convert the string element to array by specifing the seperator 
// let str2="lorem , kdd,dsksk,sksk,skk,sll";
// let str1=str2.split(" , ");
// console.log(str1);

// str.replace() is a method that is used in js to return a new string that replace the first occurance of character
// let str="javascript STring"
// let str1=str.replace("a","C");
// console.log(str1);

// str.replaceAll() is a method that is used in js to return a new string that replace all the occurance of character
// let str="javascript STring"
// let str1=str.replaceAll("a","C");
// console.log(str1);

// str.charAt(0) : is a method that is used in js to return a new string that sepecifies the character at that index position
// let str="javascript STring"
// let str1=str.charAt(2);
// console.log(str1);

// str.indexOf() is a method that is used in js to return a new string that specifies the index position of a character from the starting index position
// let str="javascript STring"
// let str1=str.indexOf("a");
// let str1=str.indexOf("a",2);
// console.log(str1);

// str.lastindexOf() is a method that is used in js to return a new string that specifies the index position of a character from the last index position
// let str="javascript STring"
// let str1=str.lastIndexOf("a");
// console.log(str1);

//str.slice( ) is a method that is used in js to return a new string that specifies sub string 
// let str1=str.slice(0,4);
// console.log(str1);


//object in js

// object is a collection of key and value pair in JS
// it is a collection of hetrogeneous elements where we can store multiple elements based on their key names as a address followed by their key and value pair
// object are considered as a super class in js from where we are inhereting all the properties of js
// js is pure object oriented programming langauge because every element in js is inherited from the object class

// syntax 
//using literals
// let objname = {
//     key : value;
//     key : value;
//     key : value;
// }

// ex 
// let student={
//         name : "abc",
//         marks : [10,20],
//         phone : 1233445649
//         email : "g@gmail.com"
// }

//ways to create objecy in js
//object using in literals
//object using constructor function
//object using class and cunstructor keyword

//object using in literals
// object is collection of key and value pair
// object can be created manually by storing it into a variable literals manually
// ex
//let emp ={
//         name : "abc",
//         marks : [10,20],
//         phone : 1233445649
//         email : "g@gmail.com"
//}
// console.log(emp);

//view:
// to access the element or the values of the object we have to use "." dot operator.
// followed by respective key names.
// console.log(emp.name);
// console.log(emp.marks[0]);
// console.log(emp.phone);

// create 
// we can create a new key name into the object dynamically 
// object are mutable
// emp.course =["java","sql"]
// console.log(emp);

//update
// we can modify the value of object dynamically by using its keyname
// emp.name = "aditya";
// console.log(emp);

//delete
// object can delete the specific key and value pair by using "delete" operator
// delete emp.email;
// console.log(student);



//object using constructor function
// a function which is used to create an object is known as constructor function
//synatax
// function identifier(pera) {
    
// }
// note:
// if the function is designed to use as a constructor then the name of the function should always be uppercamelcase
// list of perameter provide to the function will be treated as the keys (properties) of object
// the arguments passed when the function is called will be the values 
// we can copy the values into the keys of object from perameters using tihs keyword 
// we can create an object using constructor function with the help of new keyword 
// syntax 
// new function(); 
// note : new creates the object and returns its Reference 
// ex 
// function Student(sid,name){
//     this.sid=sid;
//     this.name=name;
// }
// let s1 = new Student(1,'A');
// let s2 = new Student(2,'B');
// let s3 = new Student(3,'C');
// console.log(s1);
//console.log(s1.sid);
// console.log(s1.name);
//console.log(s2.sid);
// console.log(s2.name);
//console.log(s3.sid);
// console.log(s3.name);


//object using class and cunstructor keyword
// class java {
//     constructor(id,name,price) {
//         this.id=id;
//         this.name=name;
//         this.price=price;
//     }
// }
// let j1=new java(20,"biryani",350);
// console.log(j1.name);
  

// class java {
//     constructor(id,name,price) {
//         this.id=id;
//         this.name=name;
//         this.price=price;
//     }
// }
// let j1=new java(20,"biryani",350);
// console.log(j1.name);


//function in js




// question 
// explain dif betweenn var let const 
// dif betwwn == / === 
// what is constructor function in js 
// explain arrays
// explain string 
// explian Object 
// define the array inbuilt method
// 1 push 
// 2 pop 
// 3 shift
// 4 unshift 
// 5 splice
// 6 slice 
// 7 includes 
// 8 lastindexof

// define the string inbuilt method
// 1 charat
// 2 indexof
// 3 slice 
// 4 split 
// 5 lastindexof






