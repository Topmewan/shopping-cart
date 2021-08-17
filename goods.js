const cart = {
    "p92779": {
        "name": "Мужские часы CASIO G-2900F-8VER",
        "url": "#",
        "image": "./images/casio-g-2900f-8ver_images_1650372917.jpg",
        "price": 1720.00
    },
    "p93039": {
        "name": "Мужские часы CASIO AE-1000W-1AVEF",
        "url": "#",
        "image": "./images/casio-ae-1000w-1avef_images_1675943357.jpg",
        "price": 1872.00
    },
    "p63553250": {
        "name": "Наручные часы Casio W-800H-1AVES",
        "url": "#",
        "image": "./images/63553250_images_9154502355.jpg",
        "price": 1484.00
    },
    "p93127": {
        "name": "Мужские часы CASIO EF-552-1AVEF",
        "url": "#",
        "image": "./images/casio-ef-552-1avef_images_1583730891.jpg",
        "price": 2880.00
    },
    "p79946990": {
        "name": "Мужские часы Casio EF-527D-1AVEF",
        "url": "#",
        "image": "./images/79946990_images_11571324122.jpg",
        "price": 4238.00
    },
    "p6533206": {
        "name": "Мужские часы CASIO SGW-100-2BER",
        "url": "#",
        "image": "./images/6533206_images_1657626044.jpg",
        "price": 2416.00
    },
}
let out = '<div class="pricing-table row">';
for (let key in cart) {

    out += `<div class="col col-md-6 col-lg-4">`;
    out += `<div class="package featured text-center">`;
    out += `<h2>${cart[key]['name']}</h2>`;
    out += `<img src="${cart[key]['image']}">`;
    out += `<p class="price">${cart[key]['price']} RUB</p>`;
    out += `<button class="to-cart button-primary" data-articul="${key}">В корзину</button>`;
    out += `</div>`;
    out += `</div>`;
}
out += `</div>`;
document.querySelector('.goods').innerHTML = out;

const data = {}; // сюда добавляю товары которые в корзину

document.querySelector('.goods').addEventListener('click', event => {
    if (event.target.classList.contains('to-cart')) {
        let articul = event.target.dataset['articul'];
        if (data[articul] !== undefined) {
            data[articul]['count']++;
        }
        else {
            data[articul] = cart[articul];
            data[articul]['count'] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(data));
    }
})