let currentSlide = 0;

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}
