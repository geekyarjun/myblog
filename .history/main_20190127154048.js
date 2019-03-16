const showSlides = () => {
    const slides = document.getElementsByClassName('slider__slide');
    console.log("showSlides", slides.length);
    slides.forEach(element => {
        element.style.display = 'none';
    });
}

showSlides();