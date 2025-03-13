document.addEventListener("DOMContentLoaded", function () {
  /* SLIDER FUNCTIONALITY */
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");
  const currentCategoryLabel = document.getElementById("currentCategory");
  let currentIndex = 0;
  const totalSlides = slides.length;
  let slideTimeout;

  // Custom durations (in ms): 2500ms for "Haus verkaufen" & "Haus kaufen", 1000ms for "Dienstleistungen"
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
    updateCategoryLabel();
    restartSlideShow();
  }

  function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[currentIndex]) {
      dots[currentIndex].classList.add("active");
    }
  }

  function updateCategoryLabel() {
    const currentSlide = slides[currentIndex];
    const category = currentSlide.getAttribute("data-category") || "";
    if (currentCategoryLabel) {
      currentCategoryLabel.textContent = category;
    }
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function restartSlideShow() {
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(() => {
      nextSlide();
    }, slideDurations[currentIndex]);
  }

  // Event Listeners for slider navigation
  if (nextButton) {
    nextButton.addEventListener("click", nextSlide);
  }
  if (prevButton) {
    prevButton.addEventListener("click", prevSlide);
  }
  dots.forEach(dot => {
    dot.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      showSlide(index);
    });
  });

  // Pause slider on hover and resume on mouse leave
  const slider = document.querySelector(".slider");
  if (slider) {
    slider.addEventListener("mouseenter", () => clearTimeout(slideTimeout));
    slider.addEventListener("mouseleave", restartSlideShow);
  }

  // Initialize slider
  showSlide(currentIndex);

  /* HAMBURGER MENU TOGGLE */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    const navLinks = document.getElementById("nav-links");
    if (navLinks) {
      navLinks.classList.toggle("show");
    }
  });
});
