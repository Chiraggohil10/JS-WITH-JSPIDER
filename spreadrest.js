//spread operator 
// let cart = [
// {
//     id:1,
//     name:"volvo",
//     price:50000
// },
// {
//     id:2,
//     name:"shift",
//     price:60000
// }
// ];

// let newcart = cart.map((x)=>{
//     return{
//         ...x, //spread operator is used to quick copy all the key value pair of x
//         discount:x.price*0.1,
//         disprice:x.price+x.price*0.1
//     }
// })
// console.log(newcart);



// let all = [...mhero,...dchero]
// console.log(all);  // [ 'thor', 'ironman', 'spidermane', 'superman', 'flash', 'batman' ]




//spread rest destructuring
// const [first, ...x] = [10, 20, 30, 40];
// console.log(first); // 10
// console.log(x);  // [20, 30, 40]




//rest perameter
// function avg(...x) { // ...x is rest perameter
//     console.log(x);
//     let average = x.reduce((a,b)=>{
//         return a+b;
//     },0)/x.length;
//     return average;
// }
// console.log(avg(1,2,3,4,5));
// console.log(avg(1,2,3));



