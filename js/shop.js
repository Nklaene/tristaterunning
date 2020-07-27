htmlToElement = html => {
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
};

addItemToShop = (url, name, price) => {
    let template = `
    <div class="item">
        <img src="${url}">
        <div class="text">
            <p>${name}</p>
            <p>${price}</p>
        </div>
    </div>`
    let element = htmlToElement(template);
    document.querySelector('.items').append(element);
};

// array of store items
let items = [
    {
        url: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/qipmiyjmdl8ooci0zrkd/air-zoom-pegasus-36-mens-running-shoe-D24Mcz.jpg',
        name: 'Nike Air Zoom Pegasus 36',
        price: '$120'
    },

    {
        url: 'https://m.media-amazon.com/images/I/81lM6m5JN7L._AC_SR700,525_.jpg',
        name: 'Brooks Revel 3',
        price: '$89'
    },

    {
        url: 'https://m.media-amazon.com/images/I/81dJOszG3OL._AC_SR700,525_.jpg',
        name: 'ASICS GEL-Excite 7' ,
        price: '$70'
    },

    {
        url: 'https://m.media-amazon.com/images/I/81zbd17QUeL._AC_SR700,525_.jpg',
        name: 'Brooks Ghost 12',
        price: '$110'
    },

    {
        url: 'https://m.media-amazon.com/images/I/819lrVpe-bL._AC_SR700,525_.jpg',
        name: 'Brooks Adrenaline GTS 20',
        price: '$130'
    },

    {
        url: 'https://m.media-amazon.com/images/I/710cpadswoL._AC_SR700,525_.jpg',
        name: 'Brooks Launch 7',
        price: '$75'
    }
];

// loop through array and add to store
for (let i = 0; i < items.length; i++) {
    let item = items[i];
    addItemToShop(item.url, item.name, item.price)
}