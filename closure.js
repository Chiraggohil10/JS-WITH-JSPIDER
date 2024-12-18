function parent() {
    let a=10; //lexical scope variable
    function child() {
        let b=20;
        return a+b;
    }
    return child();
}
let sum=parent();
console.log(sum);
