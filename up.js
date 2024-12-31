// async function fetchdata() {
//     let res = await fetch('https://dummyjson.com/products')
//     let response= await res.json();
//     display(response);
// }
// fetchdata();

fetch('https://dummyjson.com/products')
    .then((res) => {
        console.log(res);
        res.json()
            .then((resMessage) => {
                console.log(resMessage);
                display(resMessage);
            })
            .catch((errMessage) => {
                console.log(errMessage);

            })
    })
    .catch((err) => {
        console.log(err);
    })



function display(resMessage) {
    let body = document.getElementById('jsp');

    let container = document.createElement('div');
    container.style.display = "grid";
    container.style.gridTemplateColumns = "250px 250px 250px 250px";
    container.style.justifyContent = "space-evenly";
    
    resMessage.products.map((x)=>{

        let data = document.createElement('div');
        data.style.height = "300px";
        data.style.width = "250px";

        let head = document.createElement('h1');
        head.innerHTML =x.title;
        head.style.fontSize = "15px";

        let image = document.createElement('img');
        image.src = x.images[0];
        image.style.height = "200px";
        image.style.width = "250px";
        image.style.border = "1px solid black";

        container.appendChild(data);
        data.appendChild(head);
        data.appendChild(image);
        body.appendChild(container);
    })
}