//variable hoisting
a=40;
console.log(a);
var a=10;

//only normal function support function hoisting
add();
function add(params) {
    console.log('function');
}

// arrow()   //not support
// let arrow=()=>{
//     console.log("hello arrow");
// }