//array inbuilt methods in javascript
// let arr =[1,2,3,4,5,6,7,8,5,9,10,5];
// console.log(arr); //print array
// console.log(arr[0]); //print element at index 0
// this methods affect the original array
// arr.push(11); //add element at last
// arr.pop(); //remove element from last
// arr.unshift(11); //add element at first
// arr.shift(); //remove element from first
// arr.splice(2,2,56,78,45) //(index,how many element to remove,element to add)
// arr.splice(2,0,56,78,45) //(index,how many element to remove,element to add)
// arr.reverse();
// console.log(arr);

// this methods don't affect the original array
// let a=arr.slice(2,5)//(start,end)
// let a=arr.toString(); //convert array to string
// let a=arr.join("+"); //convert array to string with separator
// let a=arr.includes(5); //check element is present or not
// let a=arr.indexOf(5,8); //(search element,start index) find the element left to right
// let a=arr.lastIndexOf(5,6); //(search element,start index) find the element right to left
// console.log(a);

// let cart = [
//     {
//         id: 1,
//         name: "apple",
//         price: 50,
//         quantity: 1
//     },
//     {
//         id: 2,
//         name: "banana",
//         price: 30,
//         quantity: 2
//     },
//     {
//         id: 3,
//         name: "orange",
//         price: 40,
//         quantity: 1
//     }
// ];



// for(let i=0;i<=cart.length-1;i++){
//     // console.log(cart[i]);
//     // console.log(cart[i].name);
// }


// cart.forEach((x) => {
//     console.log(x);
//     // console.log(x.name);
// })


// let newcart=cart.map((x)=>{  //map is used to traverse through every element of an array.x is the accumulator x start from 0
//     // return {
//     //     id:x.id,
//     //     name:x.name,
//     //     price:x.price, 
//     //     quantity:x.quantity,
//     //     total:x.price*x.quantity //add new key value pair
//     // }

//     // return x;

//     // return {
//     //     ...x, //spread operator is used to quick copy all the key value pair of x
//     //     total:x.price*x.quantity 
//     // }

//     // console.log(x);
//     // console.log(x.name);
// })
// console.log(newcart);


// let num=[5,4,3,9];
// let newnum=num.map((x)=>{
//     return x*x;
// })
// console.log(newnum);


// let newcart=cart.map((x)=>{
//     return {
//         name:x.name,
//         price:x.price,
//         discountprice:x.price*0.9 //10% discount
//     }
// })
// console.log(newcart);


// let employ = [
//     {
//         id: 1,
//         name: "chirag",
//         salary: 50000
//     },
//     {
//         id: 2,
//         name: "parth",
//         salary: 30000
//     },
//     {
//         id: 3,
//         name: "darshan",
//         salary: 40000
//     }
// ];

// let hike = employ.map((x)=>{
//     return {
//         id:x.id,
//         name:x.name,
//         salary:x.salary,
//         hikedsalary:x.salary + x.salary*10/100 //10% hike
//     }
// })
// console.log(hike);

// let sal=[20000,30000,40000,50000];
// let hike=sal.map((x)=>{
//     // return x+x*10/100; //10% hike
//     return x-x*10/100; // 10% decriese
// })
// console.log(hike);

// let newcart=cart.reduce((sum,x)=>{
//     return sum+x.price 
// },0)
// console.log(newcart);

// let newcart=cart.reduce((sum,x)=>
//     sum=sum+x.price,0
// )
// console.log(newcart);





// let ages = [32, 33, 16, 40];
// let result = ages.filter((x)=>{
//     return x>18;
// });
// // console.log(result); // [ 32, 33, 40 ]

// let newcart=cart.filter((x)=>{
//     return x.price<=40;
// })
// console.log(newcart);





// let arr=[2,6,3,8,4,9,1,5,7];
// let newarr=arr.sort((a,b)=>{
//     // return a-b; //ascending order
//     // return b-a; //descending order
// })
// console.log(newarr);

// let arr=[2,6,3,8,4,9,1,5,7];
// let a=arr.sort();
// console.log(a);



// let newcart=cart.sort((a,b)=>{
//     // return a.price-b.price; //ascending order
//     // return b.price-a.price; //descending order
// })
// console.log(newcart);



// let res= "12"+"360"-false*18+true*10;
// console.log(res);

// let a = {
//     name: "chirag",
//     age: 22
// };
// console.log(a.name);
// console.log(a["name"]);
// console.log(a.age);
// console.log(a["age"]);



// let arr= [12,0,null,1];

// let res = arr.filter((x)=>{
//     return x;
// })
// console.log(res);


// console.log(1<3>2);


// let a =30;
// let b= "chirag";
// let obj= {
//     a,
//     b
// }
// console.log(obj);


