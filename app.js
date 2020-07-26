// Variables + templates 
let navHTML = `
        <div class="nav-bar">
            <ul class="nav-items">
                <li class="nav-item logo">
                    <a href="index.html">
                        <img src="./images/logo.png" alt="logo">
                    </a>
                </li>
                <li class="nav-item">
                    <a href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a href="about.html">About</a>
                </li>
                <li class="nav-item">
                    <a href="events.html">Events</a>
                </li>
                <li class="nav-item">
                    <a href="fittings.html">Fittings</a>
                </li>
                <li class="nav-item">
                    <a href="contact.html">Contact</a>
                </li>
                <li class="nav-item">
                    <a href="training.html">Training</a>
                </li>
                <li class="nav-item">
                    <a href="wellness.html">Wellness</a>
                </li>
                <li class="nav-item">
                    <a href="shop.html">Shop</a>
                </li>
            </ul>
        </div>
`;

/* Functions */
htmlToElement = html => {
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
};

let navTemplate = htmlToElement(navHTML);

document.querySelector('.first').prepend(navTemplate);
