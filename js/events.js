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
    new Event('Candy Race', 'Cincinnati, Ohio', 'https://s3.amazonaws.com/runguides2/events/flyers/000/004/118/thumb/stringio.txt?1580018385',
        '500-1000 participants', 'August 1 2020', '8k, 5k, 1 mile'),
    new Event('Run to Raise Dough', 'Cincinnati, Ohio', 'https://s3.amazonaws.com/runguides2/events/flyers/000/010/541/thumb/stringio.txt?1571873730',
        '100-500 participants', 'August 7 2020', '5k'),
    new Event('Race for Global Water', 'Fairfield, Ohio', 'https://s3.amazonaws.com/runguides2/events/flyers/000/012/773/thumb/stringio.txt?1572200545',
        '100-500 participants', 'August 8, 2020', '5k'),
    new Event('Newtown 5k', 'Cincinnati, Ohio', 'https://s3.amazonaws.com/runguides2/events/flyers/000/004/125/thumb/stringio.txt?1571872762',
        '500-1000 participants', 'August 8 2020', '5k'),
    new Event('Treat Trot Cincinnati', 'Harrison, Ohio', 'https://s3.amazonaws.com/runguides2/events/flyers/000/014/843/thumb/stringio.txt?1581040737',
        '100-500 participants', 'August 16 2020', '5k, 10k'),
    new Event('Oxford Aruna Run', 'Oxford, Ohio', 'https://s3.amazonaws.com/runguides2/events/flyers/000/014/949/thumb/stringio.txt?1581712335',
        '100-500 participants', 'September 2020 (TBD)', '5k'),
    new Event('Hamilton Night Glow Marathon', 'Hamilton, Ohio', 'https://s3.amazonaws.com/runguides2/events/flyers/000/011/375/thumb/stringio.txt?1571874259',
        '500-1000 participants', 'September 5 2020', '10k, Half Marathon, Marathon, Relay'),
    new Event('Tunnel to Towers', 'Crescent Springs, Kentucky', 'https://s3.amazonaws.com/runguides2/events/flyers/000/013/318/thumb/stringio.txt?1572200604',
        '100-500 participants', 'September 12 2020', '5k'),
    new Event('Paws on Patrol', 'Batavia, Ohio', 'https://s3.amazonaws.com/runguides2/events/flyers/000/010/550/thumb/stringio.txt?1571873769',
        '100-500 participants', 'September 13 2020', '5k'),
    new Event('Run for the Generations', 'Cincinnati, Ohio', 'https://s3.amazonaws.com/runguides2/events/flyers/000/004/128/thumb/stringio.txt?1571872763',
        '1-100 participants', 'September 13 2020', '5k')
];

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

for (let i = 0; i < events.length; i++) {
    let event = events[i];
    addEventToEvents(event);
}