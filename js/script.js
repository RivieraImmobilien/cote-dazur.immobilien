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
    updateCategoryLabel();
    restartSlideTimeout();
  }

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function updateCategoryLabel() {
    const category = slides[currentIndex].getAttribute("data-category") || "";
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

  function restartSlideTimeout() {
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(() => {
      nextSlide();
    }, slideDurations[currentIndex]);
  }

  // Event Listeners for slider navigation buttons
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
  // Dot navigation
  dots.forEach(dot => {
    dot.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      clearTimeout(slideTimeout);
      showSlide(index);
    });
  });

  // Pause slider on mouse enter, resume on mouse leave
  const slider = document.querySelector(".slider");
  if (slider) {
    slider.addEventListener("mouseenter", () => clearTimeout(slideTidocument.addEventListener("DOMContentLoaded", function () {
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
  
  // Custom durations: 2500ms for Haus verkaufen & Haus kaufen; 1000ms for Dienstleistungen
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
    restartSlideTimeout();
  }
  
  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }
  
  function updateCategoryLabel() {
    const category = slides[currentIndex].getAttribute("data-category") || "";
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
  
  function restartSlideTimeout() {
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(() => {
      nextSlide();
    }, slideDurations[currentIndex]);
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
  }
  let touchStartX = 0;
  let touchEndX = 0;
  slider.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
  });
  slider.addEventListener("touchend", function (e) {
    touchEndX = e.changedTouches[0].screenX;
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
meout));
    slider.addEventListener("mouseleave", restartSlideTimeout);
  }
  
  // Touch events for swipe functionality (mobile)
  let touchStartX = 0;
  let touchEndX = 0;
  slider.addEventListener("touchstart", function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });
  slider.addEventListener("touchend", function(e) {
    touchEndX = e.changedTouches[0].screenX;
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
