//variable hoisting
a=40;
console.log(a);
var a=10;

//function hoisting
add();
function add(params) {
    console.log('fnction');
}