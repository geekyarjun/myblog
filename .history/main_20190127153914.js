showSlides();

const showSlides = () => {
    const slides = document.getElementsByClassName('slider__slide');
    slides.forEach(element => {
        element.style.display = 'none';
    });
}