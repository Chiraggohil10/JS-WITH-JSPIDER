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
parent.style.backgroundColor="black"
parent.style.color="aqua"

let pera = document.getElementsByClassName("m1")
console.log(pera);
pera[0].innerHTML="div class"
pera[1].innerHTML="peragraph class 2"
Array.from(pera).forEach((x)=>{ //classname return htmlcollection so we need to convert it into array
    x.style.color="red"
})
pera[0].style.color="blue"  // we can also change the style using this method but it is lengthy, if we have same style give to all element therefore foreach is easy

let h3 = document.getElementsByTagName("h3")
console.log(h3);
h3[0].innerHTML = "this is heading 1"
h3[1].innerHTML = "this is heading 2"
h3[2].innerHTML = "this is heading 3"
h3[3].innerHTML = "this is heading 4"
Array.from(h3).forEach((x)=>{ //tagname return htmlcollection so we need to convert it into array
    x.style.color="red"
})
h3[0].style.color="blue"  // we can also change the style using this method but it is lengthy,if we have same style give to all element therefore foreach is easy


let h1 = document.querySelector("#q1")
console.log(h1);
h1.textContent="query selector"
h1.style.color="violet"

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
d[1].innerHTML="using name"
d[2].innerHTML="using name"
d[3].innerHTML="using name"
d.forEach((x)=>{  
    x.style.color="red"
})
d[2].style.color="blue"

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
