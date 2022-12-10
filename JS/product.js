// let Artworks = JSON.parse(localStorage.getItem("Catalog"));

// parse to product page
let art = JSON.parse(localStorage.getItem('Catalog'));

Object.keys(art).forEach((artIndex) => {
    let a = art[artIndex];
    let b = document.querySelector('#Artwork');
    b.innerHTML += `
    <div class="Product">
        <div>
            <img src="${a.image}">
            <h3>${a.Title}</h3>
            <p>${a.size}</p>
            <p>${a.Medium}</p>
            <p>R${a.price}</p>
            <button class="addToCart">Add To Cart</button>
        </div>
    </div>
    <br>
    `
});