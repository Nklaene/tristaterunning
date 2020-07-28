class Event {
    constructor(name, location, url, size, date, distance) {
        this.name = name;
        this.location = location;
        this.url = url;
        this.size = size;
        this.date = date;
        this.distance = distance;
    }
}

const eventContainer = document.querySelector('.events');

let events = [
    new Event('Candy Race', 'Cincinnati', 'https://s3.amazonaws.com/runguides2/events/flyers/000/004/118/thumb/stringio.txt?1580018385',
        '500-1000 participants', 'August 1 2020', '8k, 5k, 1 mile'),
]

htmlToElement = html => {
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
};

addEventToEvents = event => {
    let eventTemplate = `
    <div class="event">
        <img src="${event.url}">
        <div class="text">
            <p><a href="#">${event.name}</a></p>
            <p>${event.location}</p>
            <p>${event.date}</p>
            <p>${event.size}</p>
            <p>${event.distance}</p>
        </div>
    </div>
    `
    eventContainer.append(htmlToElement(eventTemplate));
};

for(let i = 0; i < events.length; i++){
    let event = events[i];
    addEventToEvents(event);
}