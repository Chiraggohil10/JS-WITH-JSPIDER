// fetch('https://dummyjson.com/carts')
//     .then((res) => {
//         console.log(res);
//         res.json()
//             .then((response) => {
//                 console.log(response);
//                 displayCart(response);
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     })
//     .catch((err) => {
//         console.log(err);
//     })

async function display() {
    let res=await fetch('https://dummyjson.com/carts')
    let response=await res.json()
    displayCart(response);
}
display();

function displayCart(response) {
    let cartContainer = document.getElementById('cart');


    response.carts.map((y) => {
         y.products.map((x) =>{
            let cart = document.createElement('div');
            cart.className = 'product-card';

            let title = document.createElement('h3');
            title.textContent = x.title;
            title.style.fontSize = "17px";

            let image = document.createElement('img');
            image.src = x.thumbnail;


            let price = document.createElement('p');
            price.textContent = `Price: $${x.price}`;


            let quantity = document.createElement('p');
            quantity.textContent = `Quantity: ${x.quantity}`;


            let discountedTotal = document.createElement('p');
            discountedTotal.textContent = `Discounted Total: $${x.discountedTotal}`;

            cartContainer.appendChild(cart);
            cart.appendChild(title);
            cart.appendChild(image);
            cart.appendChild(price);
            cart.appendChild(quantity);
            cart.appendChild(discountedTotal);

        });
    });
}

