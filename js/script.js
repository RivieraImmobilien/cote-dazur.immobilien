document.addEventListener("DOMContentLoaded", function () {
  // Check if slider exists before running slider code.
  const slidesContainer = document.querySelector(".slides");
  if (slidesContainer) {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;
    const totalSlides = slides.length;
    let slideTimeout;
    const slideDurations = [2500, 2500, 1000];

    function showSlide(index) {
      if (index < 0) {
        currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
      updateDots();
      restartSlideTimeout();
    }

    function updateDots() {
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    function restartSlideTimeout() {
      clearTimeout(slideTimeout);
      slideTimeout = setTimeout(nextSlide, slideDurations[currentIndex]);
