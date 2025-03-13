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
  let slideInterval;

  // Custom durations in ms for each slide
  // Adjust these durations as needed (2.5s for first two, 1s for third)
  const slideDurations = [2500, 2500, 1000];

  // Update slider to show the slide at currentIndex
  function showSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
    updateCategoryLabel();
  }

  function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[currentIndex]) {
      dots[currentIndex].classList.add("active");
    }
  }

  function updateCategoryLabel() {
    // Read the category from the data attribute on the slide
    const currentSlide = slides[currentIndex];
    const category = currentSlide.getAttribute("data-category") || "";
    if (currentCategoryLabel) {
      currentCategoryLabel.textContent = category;
    }
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
    restartSlideShow();
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
    restartSlideShow();
  }

  function restartSlideShow() {
    clearTimeout(slideInterval);
    startSlideShow();
  }

  function startSlideShow() {
    clearTimeout(slideInterval);
    slideInterval = setTimeout(() => {
      nextSlide();
    }, slideDurations[currentIndex]);
  }

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
      restartSlideShow();
    });
  });

  // Pause slider on mouse enter and resume on leave
  const slider = document.querySelector(".slider");
  if (slider) {
    slider.addEventListener("mouseenter", () => clearTimeout(slideInterval));
    slider.addEventListener("mouseleave", startSlideShow);
  }

  // Initialize slider
  showSlide(currentIndex);
  startSlideShow();

  /* HAMBURGER MENU TOGGLE */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    navMenu.style.display = navMenu.classList.contains("active") ? "flex" : "none";
  });

  /* (Optional) Other JavaScript features can be added here */
});
