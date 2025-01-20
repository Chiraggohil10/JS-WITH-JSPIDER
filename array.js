//check the array are empty or not
// let a1=[];
// if (a1.length==0) {
//   console.log("array is empty");
// }

// let arr=[12,"jspider",null,true,5,undefined];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[1]);
// for (let i = 0; i <= arr.length-1; i++) {
//     console.log(arr[i]);
// }

//inbuilt method
// let arr=[12,"jspider",5,null,5,true,5,undefined];
// console.log(arr);

// let mhero = ["thor","ironman","spidermane"];
// let dchero = ["superman","flash","batman"];
// let allhero = mhero.concat(dchero) 
// console.log(allhero);   // [ 'thor', 'ironman', 'spidermane', 'superman', 'flash', 'batman' ]

// let all = [...mhero,...dchero]
// console.log(all);  // [ 'thor', 'ironman', 'spidermane', 'superman', 'flash', 'batman' ]


// let arrr = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
// let arrr2 = arrr.flat(Infinity);
// console.log(arrr2);  // [1,2,3,4,5,6,7,8,9,10,11]

// console.log(Array.isArray("CHIRAG")); //false
// console.log(Array.isArray(['chirag',23])); //true
// console.log(Array.from("CHIRAG"));  //[ 'C', 'H', 'I', 'R', 'A', 'G' ]

// let A=100;
// let B=200;
// let C=300;
// console.log(Array.of(A,B,C)); //[ 100, 200, 300 ]





// arr.push(20,36,"banglore")
// console.log(arr);

// arr.pop()
// arr.pop()
// console.log(arr);

// arr.unshift(23,25,453)
// console.log(arr);

// arr.shift()
// arr.shift()
// console.log(arr);

// arr.splice(1,0,1,2);
// console.log(arr);
// arg 1=starting point
// arg 2=remover Element
// arg 3=adding value

// let arr1=arr.slice(2,5);
// console.log(arr1);
// arg 1=starting point
// arg 2=ending poing

// arr.reverse()
// console.log(arr);

// let str=arr.toString();
// console.log(str);

// let str=arr.join(" + ")
// console.log(str);

// let a=arr.includes(5);
// console.log(a);

// let a=arr.indexOf(5)
// let a=arr.indexOf(5,3)
// console.log(a);

// let a=arr.lastIndexOf(5,3);
// let a=arr.lastIndexOf(5);
// console.log(a);



//map reduce sort filter
let cart = [
  {
    id: 21,
    name: "bike",
    price: 3200
  },
  {
    id: 23,
    name: "car",
    price: 3200
  },
  {
    id: 25,
    name: "cycle",
    price: 2900
  },
  {
    id: 1,
    name: "truck",
    price: 2700
  },
  {
    id: 111,
    name: "truck",
    price: 2394
  },
  {
    id: 142,
    name: "truck",
    price: 4694
  }
];

// for (let i = 0; i <= cart.length-1; i++) {
//     console.log(cart[i].name);    
// }



//foreach method is not return any value 
// cart.forEach((i) => {
//     console.log(i);
// });


//map
// let newp = cart.map((x)=>{
//     console.log(x.name);
//     return x;
// })
// console.log(newp);



//filter
// let newp = cart.filter((x)=>{
//     return x.price >3000;
// })
// console.log(newp);

// let newp = cart.filter((x)=>{
//     return x.name === "truck";
// })
// console.log(newp);



//reduce
// let newp = cart.reduce((sum, x) => {
//    return sum + x.price;
//    }, 0); 
// console.log(newp);



//sort
// let arr = [76,8,4,7,9,2]
// let newsort = arr.sort((a,b)=>{
//     // return a-b; // ase
//     return b-a; // des
// })

// console.log(newsort);







//chai aur code map reduce filter 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20];
// let big = arr.filter((x)=>{
//     return x > 5;
// })
// console.log(big);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let big = arr.map((x)=>{
//     // return x+10; //add 10
//     // return x*x; //square
//     // return x*x*x; //cube
// })
// console.log(big);

//chaining
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newarr = arr.map((x)=>{
//     return x*10;
// }).map((x)=>{
//     return x+1;
// }).filter((x)=>{
//     return x >= 40;
// })
// console.log(newarr);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let big = arr.filter((x)=>{
//     return x > 5;
// }).map((x)=>{
//     return x*x;
// })
// console.log(big);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let big = arr.filter((x)=>{
//     return x > 5;
// }).map((x)=>{
//     return x*x;
// }).reduce((x,sum)=>{ //x is accumulator sum is initial value
//     return x+sum;
// },0)
// console.log(big);


