async function getData() {
    let res = await fetch("https://fakestoreapi.com/products");
    let data =await res.json()
    demo(data);
}
getData()


function demo(data){
    let body = document.body;
    let container = document.createElement('section');
    container.classList.add('container')
    data.map((x)=>{
         let {category,title, id , price , description , image} = x;
         let div = document.createElement('div');
         div.classList.add('item')
         let img = document.createElement('img');
         img.src = image;
         let h3 = document.createElement('h3')
         h3.innerText = title;
         let p = document.createElement('p');
         p.innerText = description;
         div.appendChild(img)
         div.appendChild(h3)
         div.appendChild(p)
         container.appendChild(div)
         body.appendChild(container)
    })
}
