class Location {
    constructor(city, address, phone, hours) {
        this.city = city;
        this.address = address;
        this.phone = phone;
        this.hours = hours;
    };
};

htmlToElement = html => {
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
};

let locations = [
    new Location(
      'Mariemont',
      '7433 Wooster Pike Cincinnati OH 45227',
      '1-513-407-45227',
      'Monday - Thursday: 10am - 8pm<br>Friday - Saturday: 10am - 6pm<br>Sunday: 12pm - 5pm'
    ),

    new Location(
        'Edgewood',
        '148 Barnwood DR Edgewood KY 41017',
        '1-859-341-9999',
        'Monday - Thursday: 10am - 8pm<br>Friday - Saturday: 10am - 6pm<br>Sunday: 12pm - 5pm'
    )
]

addLocation = (location) => {
    let template = `
    <div class="location">
        <h3>${location.city}</h3>
        <p>${location.address}</p>
        <p><a href="">${location.phone}</a></p>
        <p><strong>${location.hours}</strong></p>
    </div>
    `;
    let element = htmlToElement(template);
    document.querySelector('.locations').append(element);
};

for(let i = 0; i < locations.length; i++) {
    let location = locations[i];
    addLocation(location);
}