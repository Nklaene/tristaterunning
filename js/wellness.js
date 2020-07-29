class Partner {
    constructor(name, description, website) {
        this.name = name;
        this.description = description;
        this.website = website;
    }
}

htmlToElement = html => {
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
};

let partners = [
    new Partner('Hogue Chiropractic', `Appointments available  2nd Tuesday of the month
    6:30-8:00.  Appointments are in 15 min increments
    Call the office directly to schedule your appointment
    Hogue Chiropractic Center 
    174 Barnwood Drive  
    Edgewood, KY 41017 
    Phone: 859-341-7746`, 'www.hoguechiropracticcenter.com'),
    new Partner('Oxford Physical Therapy', `Free consultations available, no appointment necessary
    Crestview Hills- Chancellor Dr 859-331-2233
    Crestview Hills- Chapel Place Center 859-578-7000
    Dry Ridge- 859-823-2090
    Florence- 859-538-1165
    Independence- 859-356-4600`, 
    'www.oxfordphysicaltherapy.com'),
    new Partner('Mt. Lookout Chiropractic and Sports Injury Center', `455 Delta Ave Suite 1
    Cincinnati, OH 45226
    Phone: 513-321-8484`,
    'www.mtlookoutchiro.com')
]

const partnersContainer = document.querySelector('.partners');

addPartnerToPartners = partner => {
    let template = `
        <div class="partner">
            <h3>${partner.name}</h3>
            <p>${partner.description}</p>
            <p><a href="http://${partner.website}">${partner.website}</a></p>
        </div>
    `;
    partnersContainer.append(htmlToElement(template));
}

for (let i = 0; i < partners.length; i++) {
    let current = partners[i];
    addPartnerToPartners(current);
}