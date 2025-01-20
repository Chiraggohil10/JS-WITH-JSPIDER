// let a=document.createElement("h1");
// console.log(a);
// a.innerText = "hellooo"
// a.style.backgroundColor="black"
// a.style.color="aqua"

// let image=document.createElement("img");
// console.log(image);
// image.src="https://i.pinimg.com/736x/d9/e1/04/d9e104948243f0f6551498112da0872a.jpg";
// image.alt="hii"
// image.style.height="200px"
// image.style.border="20px solid black"
// image.style.margin="20px 20px"


// parent = document.getElementById("c1");
// console.log(parent);

// parent.appendChild(a)
// parent.appendChild(image)


let parent=document.getElementById("c1")
console.log(parent);
parent.innerHTML = "this is javascript"

let pera = document.getElementsByClassName("m1")
console.log(pera);
pera[0].innerHTML="div class"
pera[1].innerHTML="peragraph class 2"

let h3 = document.getElementsByTagName("h3")
console.log(h3);
h3[0].innerHTML = "this is heading 1"
h3[1].innerHTML = "this is heading 2"
h3[2].innerHTML = "this is heading 3"
h3[3].innerHTML = "this is heading 4"

let h1 = document.querySelector("#q1")
console.log(h1);
h1.textContent="query selector"

let img = document.querySelectorAll("img")
console.log(img);
img[0].src="https://i.pinimg.com/736x/d9/e1/04/d9e104948243f0f6551498112da0872a.jpg"
img[1].src="https://i.pinimg.com/736x/d9/e1/04/d9e104948243f0f6551498112da0872a.jpg"
img[2].src="https://i.pinimg.com/736x/d9/e1/04/d9e104948243f0f6551498112da0872a.jpg"
img[3].src="https://i.pinimg.com/736x/d9/e1/04/d9e104948243f0f6551498112da0872a.jpg"
// img[0].style.height="200px"
// img[0].style.border="20px solid black"
// img[0].style.margin="20px 20px"
// img[1].style.height="200px"
// img[1].style.border="20px solid black"
// img[1].style.margin="20px 20px"
// img[2].style.height="200px"
// img[2].style.border="20px solid black"
// img[2].style.margin="20px 20px"
// img[3].style.height="200px"
// img[3].style.border="20px solid black"
// img[3].style.margin="20px 20px"

// or
//only using forEach beacause it is a nodelist not an array in nodelist gives only foreach attribute  
img.forEach((x)=>{
    x.style.height="200px"
    x.style.border="20px solid black"
    x.style.margin="20px 20px"
})




let d=document.getElementsByName("division")
console.log(d);
d[0].innerHTML="using name"

let body = document.querySelector("body");
body.style.transition="1500ms"

function changeMode() {
    if (body.style.backgroundColor != "black") {
        body.style.backgroundColor = "black"
        body.style.color = "white"
        img[0].style.border="20px solid red"
    }
    else{
        body.style.backgroundColor = "white"
        body.style.color = "black"
        img[0].style.border="20px solid black"
    }
}
