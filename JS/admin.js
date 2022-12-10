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
]));
// parse to table
let art = JSON.parse(localStorage.getItem('Catalog'));

// Object.keys(art).forEach((artIndex) => {
//     let a = art[artIndex];
//     let b = document.querySelector('tbody');
//     b.innerHTML += `
//     <tr>                                                      
//         <td>${a.size}</td>
//         <td><img src="${a.image}"></td>
//         <td>${a.Title}</td>
//         <td>${a.Medium}</td>
//         <td>R${a.price}</td>
//         <td><button>delete</button></td>
//         <td><button>edit</button></td>
//     </tr>
//     `
// })
function tableDisplay(){
    Object.keys(art).forEach((artIndex) => {
        let a = art[artIndex];
        let b = document.querySelector('tbody');
        b.innerHTML += `
        <tr>                                                      
            <td>${a.size}</td>
            <td><img src="${a.image}"></td>
            <td>${a.Title}</td>
            <td>${a.Medium}</td>
            <td>R${a.price}</td>
            <td><button>delete</button></td>
            <td><button>edit</button></td>
        </tr>
        `
    })
};
tableDisplay()

// sort & filter
// sort size






// sort alphabetical
// let names  = ["John Doe", "Alex Doe", "Peter Doe", "Elon Doe"];
// let sortedNames = names.sort();
// console.log(sortedNames);
let Titles = ["Star Ocean", "Folklore", "Clouded Dance", "Mind Fog", "Baptism"];
let SortedTitles = Titles.sort();
console.log(SortedTitles)

let Catalog = 'Catalog';
let sortCatalog = Catalog.sort();
console.log(sortCatalog)

// let alpha = document.querySelector('#alpha')
// alpha.addEventListener('click', (e, item) => {
//     e.preventDefault()
//     item.sort()
//     localStorage.setItem('Catalog', JSON.stringify(art))
//     console.log(item);
//     tableDisplay()
// })
// let sort = document.getElementById(alpha);
// sort.addEventListener("click", function(){
//     document.getElementById("alpha")
// })


// sort price


// delete


// edit
