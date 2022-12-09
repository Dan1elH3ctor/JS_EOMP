// to display
localStorage.setItem('Catalog', JSON.stringify([
    {
        size: "A4",
        image:"",
        Title: "first",
        Medium: "pencil",
        price: 120
    },
    {
        size: "A4",
        image:"",
        Title: "second",
        Medium: "charcoal",
        price: 50
    },
    {
        size: "A4",
        image:"",
        Title: "third",
        Medium: "mixed media",
        price: 150
    },
    {
        size: "A4",
        image:"",
        Title:"fourth",
        Medium: "paint",
        price: 100
    },
    {
        size: "A4",
        image:"",
        Title: "fifth",
        Medium: "paint",
        price: 130
    },
    {
        size: "A4",
        image:"",
        Title: "sixth",
        Medium: "pencil",
        price: 80
    }
]));
let art = JSON.parse(localStorage.getItem('Catalog'));

Object.keys(art).forEach((artIndex) => {
    let a = art[artIndex];
    let b = document.querySelector('tbody');
    b.innerHTML += `
    <tr>                                                      
        <td>${a.size}</td>
        <td>${a.image}</td>
        <td>${a.title}</td>
        <td>${a.medium}</td>
        <td>${a.price}</td>
        <td><button>delete</button></td>
        <td><button>edit</button></td>
    </tr>
    `
})

// delete


// edit
