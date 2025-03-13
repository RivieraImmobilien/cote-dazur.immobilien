let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function moveSlide(step) {
    let slides = document.querySelectorAll(".slide");
    slideIndex += step;
    if (slideIndex < 1) {
        slideIndex = slides.length;
    } else if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Start the slider when the page loads
document.addEventListener("DOMContentLoaded", showSlides);
