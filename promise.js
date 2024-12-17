fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => {
        res.json()
            .then((response) => {
                console.log(response);
                displayPhotos(response);
            })
            .catch((error) => {
                console.log(error);
            })
    })
    .catch((err) => {
        console.log(err);
    })


// Function to display photos on the webpage
function displayPhotos(response) {
    let maindiv = document.getElementById('maindiv');
    response.map((x) => {
        let div = document.createElement('div');
        div.classList.add('photo-item'); //apply to css

        let images = document.createElement('img');
        images.src = x.thumbnailUrl; // src of image

        div.appendChild(images); //images store in div
        maindiv.appendChild(div); //div stores in maindiv
    });
}
