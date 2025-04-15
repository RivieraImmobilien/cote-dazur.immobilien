document.addEventListener("DOMContentLoaded", function () {
  /* SLIDER FUNCTIONALITY */
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  const totalSlides = slides.length;
  let slideTimeout;

  // Custom durations (in milliseconds):
  // 2500ms for "Haus verkaufen" & "Haus kaufen", 1000ms for "Dienstleistungen"
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

  // Event Listeners for slider navigation
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

  // Pause slider on hover, resume on mouse leave
  const slider = document.querySelector(".slider");
  if (slider) {
    slider.addEventListener("mouseenter", () => clearTimeout(slideTimeout));
    slider.addEventListener("mouseleave", restartSlideTimeout);
  }
  
  // Touch events for swipe functionality (mobile)
  let touchStartX = 0;
  let touchEndX = 0;
  slider.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
  });
  slider.addEventListener("touchend", function (e) {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) {
      nextSlide();
    } else if (touchEndX > touchStartX + 50) {
      prevSlide();
    }
  });

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

  /* ADDRESS SEARCH FUNCTIONALITY USING Algolia Places */
  if(document.getElementById("address-input")) {
    places({
      container: document.querySelector("#address-input"),
      countries: ['fr']
    });
  }
});
