document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  const totalSlides = slides.length;
  let slideInterval;

  // Custom durations (milliseconds)
  const slideDurations = [2500, 2500, 1000]; // 2.5s, 2.5s, 1s

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
  }

  function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[currentIndex]) {
      dots[currentIndex].classList.add("active");
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
    clearInterval(slideInterval);
    startSlideShow();
  }

  function startSlideShow() {
    clearInterval(slideInterval);
    slideInterval = setTimeout(() => {
      nextSlide();
      startSlideShow();
    }, slideDurations[currentIndex]); // Uses custom timing per slide
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      nextSlide();
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      prevSlide();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", function () {
      let index = parseInt(this.getAttribute("data-index"));
      showSlide(index);
      restartSlideShow();
    });
  });

  startSlideShow();
});
