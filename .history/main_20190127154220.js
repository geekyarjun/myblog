const showSlides = () => {
    const slides = document.getElementsByClassName('slider__slide');
    console.log("showSlides", slides);
    slides.map(element => {
        element.style.display = 'none';
    });
}

showSlides();