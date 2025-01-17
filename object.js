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

// view
console.log(student);
console.log(student.name);
console.log(student["name"]); 
console.log(student.marks[0]);
console.log(student["marks"][0]);
console.log(student.subject.sql);




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







