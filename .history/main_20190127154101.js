const showSlides = () => {
    const slides = document.getElementsByClassName('slider__slide');
    console.log("showSlides", slides[0]);
    slides.forEach(element => {
        element.style.display = 'none';
    });
}

showSlides();