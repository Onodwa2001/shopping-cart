let popId = document.getElementById('popUp');
// let inPop = document.getElementById('inner-pop');
let about_pop = document.getElementById('popUp-wrapper');

let cardWarpper = document.querySelector(".card-wrapper");

const products = [
    {name: "Naruto", price: 120, btnID: "ios", img: "thumb-itachi-uchiha-naruto-shippuden-naruto-characters-uchiha-itachi-japanese-manga.jpg"},
    {name: "Bleach", price: 100, btnID: "sam", img: "bleach-ichigo-1269001.jpg"},
    {name: "Hunter x Huner", price: 100, btnID: "hua", img: "Screenshot 2022-06-19 172122.png"},
    {name: "One Piece", price: 120, btnID: "xao", img: "one_piece.0.jpg"},
]


products.forEach((value, index, arr) => {
    cardWarpper.innerHTML += `<div class="card">
        <img src="images/${value.img}" alt="">
        <div class="info">
            <h2>ZAR ${value.price}</h2>
            <h3>${value.name}</h3>
            <button id="${value.btnID}" onclick="activatePopup()">add</button>
        </div>
        </div>`;
});

let counter = 0;
let key = `product_${Math.random() * 1000000}`;

for (let i = 0; i < products.length; i++) {
    document.getElementById(products[i].btnID).addEventListener('click', (e) => {
        products[i].btnID = key;
        localStorage.setItem(key, JSON.stringify(products[i]));
        // localStorage.setItem('key_variable', key);
        key = `product_${Math.random() * 1000000}`;
    });
}

let activatePopup = (e) => {
    popId.style.display = "block";
}

let deactivatePopup = (e) => {
    popId.style.display = "none";
    location.reload();
}

document.querySelector('#no-of-items').innerHTML += localStorage.length;