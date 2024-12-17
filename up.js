let pro=new Promise((res,err)=>{
    fetch('https://dummyjson.com/products')
    .then((res)=>{
        console.log(res); 
        res.json()
        .then((resMessage)=>{
            console.log(resMessage);
            let body=document.getElementById('jsp'); 
            let container=document.createElement('div');
            container.style.display="grid";
            container.style.gridTemplateColumns="250px 250px 250px 250px";
            container.style.justifyContent="space-evenly";
            for(let i=0;i<resMessage.products.length;i++){
                let data=document.createElement('div');
                data.style.height="300px";
                data.style.width="250px";
                let head=document.createElement('h1');
                let image=document.createElement('img');
                head.innerHTML=resMessage.products[i].title;
                head.style.fontSize="15px";
                image.src=resMessage.products[i].images[0];
                image.style.height="200px";
                image.style.width="250px";
                image.style.border="1px solid black";
                container.appendChild(data);
                data.appendChild(head);
                data.appendChild(image);
                body.appendChild(container);
                
            }
        })
        .catch((errMessage)=>{
            console.log(errMessage);
            
        })
    })
    .catch((err)=>{
        console.log(err);
        
    })
})