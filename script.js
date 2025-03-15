document.addEventListener("DOMContentLoaded", function () {
  // Slider functionality
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const slideDurations = [5000, 4000, 6000]; // Durations for each slide
  let slideTimeout;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    currentIndex = index;
    restartSlideTimeout();
  }

  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
  }

  function restartSlideTimeout() {
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(() => {
      nextSlide();
    }, slideDurations[currentIndex]);
  }

  const nextButton = document.getElementById("nextButton");
  const prevButton = document.getElementById("prevButton");

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

  dots.forEach(dot => {
    dot.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      clearTimeout(slideTimeout);
      showSlide(index);
    });
  });

  const slider = document.querySelector(".slider");
  if (slider) {
    slider.addEventListener("mouseenter", () => clearTimeout(slideTimeout));
    slider.addEventListener("mouseleave", restartSlideTimeout);
  }

  let touchStartX = 0;
  let touchEndX = 0;
  slider.addEventListener("touchstart", function(e) {
    touchStartX = e.touches[0].clientX;
  });
  slider.addEventListener("touchmove", function(e) {
    touchEndX = e.touches[0].clientX;
    handleGesture();
  });

  function handleGesture() {
    if (touchEndX < touchStartX - 50) {
      nextSlide();
    }
    if (touchEndX > touchStartX + 50) {
      prevSlide();
    }
  }

  showSlide(currentIndex);

  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    const navLinks = document.getElementById("nav-links");
    if (navLinks) {
      navLinks.classList.toggle("show");
    }
  });

  // Form validation
  const sellForm = document.getElementById("sellForm");
  if (sellForm) {
    sellForm.addEventListener("submit", function (event) {
      if (!sellForm.checkValidity()) {
        event.preventDefault();
        alert("Bitte füllen Sie alle erforderlichen Felder aus.");
      }
    });
  }

  // Initialize map (placeholder function)
  function initializeMap() {
    // Map initialization code here
    console.log("Map initialized");
  }

  initializeMap();
});
