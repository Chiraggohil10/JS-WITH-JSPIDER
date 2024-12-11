let a=document.createElement("h1");
console.log(a);
a.innerText = "hellooo"
a.style.backgroundColor="black"
a.style.color="aqua"

let image=document.createElement("img");
console.log(image);
image.src="https://i.pinimg.com/736x/d9/e1/04/d9e104948243f0f6551498112da0872a.jpg";
image.alt="hii"
image.style.height="200px"
image.style.border="20px solid black"
image.style.margin="20px 20px"


parent = document.getElementById("c1");
console.log(parent);

parent.appendChild(a)
parent.appendChild(image)