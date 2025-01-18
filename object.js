//using literals
let student={
        name : "abc",
        marks : [10,20],
        phone : 1233445649,
        subject : {
            java : 100,
            sql : 200
        },
        email : "g@gmail.com"
}

// console.log(Object.keys(student));      //only give key
// console.log(Object.values(student));   //only give value 
// console.log(student.hasOwnProperty("name"));  // check the existence of element give true or false

//check the object empty or not
// let ob={};
// if (Object.keys(ob).length==0) { //object.keys(ob) give the array of keys then check the length if length is 0 then object is empty
//     console.log("object is empty");
// }



// view
// console.log(student);
// console.log(student.name);
// console.log(student["name"]); 
// console.log(student.marks[0]);
// console.log(student["marks"][0]);
// console.log(student.subject.sql);
// console.log(student["subject"]["sql"]);




//add
// student.age =20;
// student.id = 5465;
// console.log(student);

//edit
// student.name = "chirag"
// console.log(student);
// student.marks[1]=30;
// console.log(student);


// delete
// delete student.email;
// console.log(student);


//using constructer function
// function meghna(id,name,price) {
//     this.id=id;
//     this.name=name;
//     this.price=price;
// }
// let b1=new meghna(20,"biryani",350);
// console.log(b1);
// console.log(b1.name);


//using class 
// class java {
//     constructor(id,name,price) {
//         this.id=id;
//         this.name=name;
//         this.price=price;
//     }
// }
// let j1=new java(20,"biryani",350);
// console.log(j1.name);


// let obj ={
//     username : "chirag",
//     price : 999,
//     welcome : function() {
//         console.log(this.username); //refer current context // 1st time = chirag //2nd time = parth
//         console.log(this); //1st time = { username: 'chirag', price: 999, welcome: [Function: welcome] } 2nd time = { username: 'parth', price: 999, welcome: [Function: welcome] }
        
//     }
// }
// obj.welcome()
// obj.username = "parth" //change the username value
// obj.welcome()




