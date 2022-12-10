// to display
localStorage.setItem('Catalog', JSON.stringify([
    {
        size: "A5",
        image:"https://i.postimg.cc/3R0bcMHL/Star-Ocean.jpg",
        Title: "Star Ocean",
        Medium: "Oil Painting",
        price: 120
    },
    {
        size: "A3",
        image:"https://i.postimg.cc/pdSFqrxF/Folklore.jpg",
        Title: "Folklore",
        Medium: "Pen & Pencil",
        price: 50
    },
    {
        size: "A4",
        image:"https://i.postimg.cc/Hn9jDkG3/Clouded-Dance.jpg",
        Title: "Clouded Dance",
        Medium: "Watercolor",
        price: 150
    },
    {
        size: "A5",
        image:"https://i.postimg.cc/02N92f79/Mind-Fog.jpg",
        Title:"Mind-Fog",
        Medium: "Acrylic",
        price: 100
    },
    {
        size: "A5",
        image:"https://i.postimg.cc/brwfryDm/Baptism.jpg",
        Title: "Baptism",
        Medium: "Acrylic",
        price: 130
    },
    // {
    //     size: "A4",
    //     image:"",
    //     Title: "sixth",
    //     Medium: "pencil",
    //     price: 80
    // }
]));
// parse to table
let art = JSON.parse(localStorage.getItem('Catalog'));

Object.keys(art).forEach((artIndex) => {
    let a = art[artIndex];
    let b = document.querySelector('tbody');
    b.innerHTML += `
    <tr>                                                      
        <td>${a.size}</td>
        <td><img src="${a.image}"></td>
        <td>${a.Title}</td>
        <td>${a.Medium}</td>
        <td>${a.price}</td>
        <td><button>delete</button></td>
        <td><button>edit</button></td>
    </tr>
    `
})

// delete


// edit
