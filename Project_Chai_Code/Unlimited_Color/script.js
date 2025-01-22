let randomColor = () => {
    let hexa = '0123456789ABCDEF';
    let color = '#';
   for (let i = 0; i < 6;i++) {
        color = color + hexa[Math.floor(Math.random()*16)];
   }
   return color;
}

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let a;
start.addEventListener('click' , (e) => {
   if (a == null) { 
    a = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    },1000);
   }
})

stop.addEventListener('click' , (e) => {    
    clearInterval(a); 
    a = null;
})

