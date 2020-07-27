plusSlides = n => {
    showSlides(slideIndex += n);
}

currentSlide = n => {
    showSlides(slideIndex = n);
}

showSlides = n => {
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('dot');

    n > slides.length ? slideIndex = 1 : slideIndex = slideIndex;
    n < 1 ? slideIndex = slides.length : slideIndex = slideIndex;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

let slideIndex = 1;
showSlides(slideIndex);