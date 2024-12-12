// //normal function
// function print(){
//     console.log("hello");
// }
// print();

// //with perameterised function
// function add(a,b) {
//     let c=a+b;
//     console.log(c);f
// }
// add(10,20);

// //with peramiterised and returntype function
// function sub(x,y) {
//     let z=x-y;
//     return z;
// }
// let total=sub(40,20);
// console.log(total);
// console.log(sub(30,20));


// let m=10;
// let n=30;
// function pr1(x,y) {
//     let total=m*x + n*y;
//     return total;
// }
// let val=pr1(34,42);
// console.log(val);


// let a1=21;
// let b1=34;  
// function parent(x,y) {
//     let z=23;
//     function child(j,k) {
//         return a1*b1*x*y*z*k*j;
//     }
//     let total=child(10,20);
//     console.log(total);
// }
// parent(23,43);



//anonymous function
// function(a,b) {
//     let c=a+b;
//     console.log(c);
// }

//immedately invoked function expression
// (function(a,b) {
//     let c=a+b;
//     console.log(c);
// })(10,20);

// function with expression
// let add=function(a,b) {
//     let c=a+b;
//     console.log(c);
// }
// console.log(typeof add);
// add(10,20)


//arrow function
// let add = (a,b) => {
//     console.log(a+b);
// }
// add(30,20);
// let print = () => console.log("print me");
// print();


//callback function
//  console.log("line number 1");
//  setTimeout (() => {
//     console.log("line number 2");
//  },8000)
//  console.log("okk");

// or

// function add(a,b) {
//     return a+b;
// }
// function total(a,b) {
//     return add(a,b)
// }
// let res=total(20,30)
// console.log(res);






//higher order function
// function add(a,b) {
//    return a+b;
// }
// function sub(d,e) {
//    return d-e;
// }
// function total(m,n,add,sub) {
//    return m*n-add-sub;
// }
// let res = total(10,20,sub(30,20),add(20,30))
// console.log(res);

// or 

// let add= (a,b) => {
//     return a+b;
// }
// function total(add) {
//     return add;
// }
// let res = total(add(10,20));
// console.log(res);



//first order function 
// function add(a,b) {
//    return a+b;
// }
// let total=add(10,20)
// console.log(total);



//function with constructor
// function emp(id,name,sal,hired) {
//    this.id=id;
//    this.name=name;
//    this.sal=sal;
//    this.hired=hired;
// }
// let e1=new emp(131,"Chirag",9099423494,"23-11-2018")
// console.log(e1.name);



