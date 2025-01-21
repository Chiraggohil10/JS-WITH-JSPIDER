let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

buttons.forEach((x)=>{
    console.log(x);
    x.addEventListener("click" , (e)=>{
         console.log(e);
         console.log(e.target);

         if (e.target.id === 'grey' || e.target.id === 'white' || e.target.id === 'blue' || e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
            body.style.transition = "1000ms";
         }
    })
})