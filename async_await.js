async function fetchdata() {
    let res = await fetch('https://dummyjson.com/products')
    let response = await res.json();
    console.log(response);
}
fetchdata()