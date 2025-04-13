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
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        clearTimeout(slideTimeout);
        nextSlide();
      });
    }
    if (prevButton) {
      prevButton.addEventListener("click", () => {
        clearTimeout(slideTimeout);
        prevSlide();
      });
    }
    dots.forEach((dot, index) => {
      dot.addEventListener("click", function () {
        clearTimeout(slideTimeout);
        showSlide(index);
      });
    });
    const slider = document.querySelector(".slider");
    if (slider) {
      slider.addEventListener("mouseenter", () => clearTimeout(slideTimeout));
      slider.addEventListener("mouseleave", restartSlideTimeout);
      let touchStartX = 0, touchEndX = 0;
      slider.addEventListener("touchstart", e => {
        touchStartX = e.changedTouches[0].screenX;
      });
      slider.addEventListener("touchend", e => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
      });
    }
    showSlide(currentIndex);
  }

  // HAMBURGER MENU TOGGLE
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      const navLinks = document.getElementById("nav-links");
      if (navLinks) {
        navLinks.classList.toggle("show");
      }
    });
  }
});
