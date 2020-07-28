class ShopItem {
    constructor(url, name, price) {
        this.url = url;
        this.name = name;
        this.price = price;
    }
}

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
            <a class="buy-btn">Add to cart</a>
        </div>
    </div>`
    let element = htmlToElement(template);
    document.querySelector('.items').append(element);
};

// array of store items
let items = [
    new ShopItem('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/qipmiyjmdl8ooci0zrkd/air-zoom-pegasus-36-mens-running-shoe-D24Mcz.jpg',
    'Nike Air Zoom Pegasus 36', 
    '$120'
    ),

    new ShopItem('https://m.media-amazon.com/images/I/81lM6m5JN7L._AC_SR700,525_.jpg',
    'Brooks Revel 3',
    '$89'
    ),

    new ShopItem('https://m.media-amazon.com/images/I/81dJOszG3OL._AC_SR700,525_.jpg',
    'ASICS GEL-Excite 7',
    '$70'
    ),

    new ShopItem('https://m.media-amazon.com/images/I/81zbd17QUeL._AC_SR700,525_.jpg',
    'Brooks Ghost 12',
    '$110'
    ),

    new ShopItem('https://m.media-amazon.com/images/I/819lrVpe-bL._AC_SR700,525_.jpg',
    'Brooks Adrenaline GTS 20',
    '$130'
    ),
    
    new ShopItem('https://m.media-amazon.com/images/I/710cpadswoL._AC_SR700,525_.jpg',
    'Brooks Launch 7',
    '$75'
    ),

    new ShopItem('https://a248.e.akamai.net/f/248/9086/10h/wolverine-o.scene7.com/is/image/WolverineWorldWide/S20579-40_2?wid=790&hei=657&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=.5,1,1,0&iccEmbed=0&printRes=72',
    'Saucony Ride 13',
    '$130'
    ),

    new ShopItem('https://a248.e.akamai.net/f/248/9086/10h/wolverine-o.scene7.com/is/image/WolverineWorldWide/S20551-40_2?wid=445&hei=367&fmt=jpeg&qlt=90,0&op_sharpen=1&resMode=sharp2&op_usm=.5,1,1,0&iccEmbed=0&printRes=72',
    'Saucony Kinvara 11',
    '$120'
    ),

    new ShopItem('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8594114d-e662-4cf9-bec2-a53181568221/flex-stride-mens-5-2-in-1-running-shorts-mRSgSF.jpg',
    'Nike Flex Stride', 
    '$55'),

    new ShopItem('https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-92bdd17a-a8d9-41c7-83c4-5155f0dcbae0/aeroswift-mens-1-2-length-running-tights-dDSJ0x.jpg',
    'Nike AeroSwift',
    '$80')
];

// loop through array and add to store
for (let i = 0; i < items.length; i++) {
    let item = items[i];
    addItemToShop(item.url, item.name, item.price)
}