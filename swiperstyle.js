const sliderContainer = document.querySelector('.slider-container');
const testimonials = document.querySelectorAll('.testimonial');
let currentSlide = 0;

function showSlide() {
    const offset = -currentSlide * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    showSlide();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    showSlide();
}

// Show the first slide initially
showSlide();
