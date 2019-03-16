showSlides();

const showSlides = () => {
    console.log("showSlides", showSlides);
    const slides = document.getElementsByClassName('slider__slide');
    slides.forEach(element => {
        element.style.display = 'none';
    });
}
