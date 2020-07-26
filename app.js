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

// Functions

//Utility function to make an html element
htmlToElement = html => {
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
};

// Slide Show (about.html)
plusSlides = n => {
  showSlides(slideIndex += n);
}

currentSlide = n => {
  showSlides(slideIndex = n);
}

showSlides = n => {
  let slides = document.getElementsByClassName('slides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
}

let navTemplate = htmlToElement(navHTML);

document.querySelector('.first').prepend(navTemplate);

let slideIndex = 1;
showSlides(slideIndex);
