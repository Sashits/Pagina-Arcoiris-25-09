let currentIndex = 0;
const slides = document.querySelectorAll('.carousel input[type="radio"]');
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentIndex].checked = false;
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].checked = true;
}

setInterval(showNextSlide, 3000); // Cambia de imagen cada 3 segundos
