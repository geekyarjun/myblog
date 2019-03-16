let showSlideIndex = 1;

const showSlides = () => {
    const slides = document.getElementsByClassName('slider__slide');
    console.log("showSlides", typeof slides);
    for(let i=0; i<slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[showSlideIndex-1].style.display = 'block';
}

showSlides();

const moveSlides = (direction) => {
    if (direction === '+') {
        showSlideIndex++;
        showSlides();
    } else {
        showSlideIndex--;
        showSlides();
    }
}