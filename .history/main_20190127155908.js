let showSlideIndex = 1;

const showSlides = () => {
    const slides = document.getElementsByClassName('slider__slide');
    console.log("showSlides", typeof slides);
    for(let i=0; i<slides.length; i++) {
        slides[i].style.display = 'none';
    }
}

showSlides();