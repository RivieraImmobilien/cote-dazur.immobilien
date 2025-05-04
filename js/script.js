document.addEventListener("DOMContentLoaded", function () {
  /* Slider */
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  let slideTimeout;
  const slideDurations = [2500, 2500, 1000];

  function showSlide(i) {
    currentIndex = (i + slides.length) % slides.length;
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
    dots.forEach((d, idx) => d.classList.toggle("active", idx === currentIndex));
    restartTimeout();
  }
  function restartTimeout() {
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(() => showSlide(currentIndex + 1), slideDurations[currentIndex]);
  }

  if (slidesContainer) {
    nextButton?.addEventListener("click", () => { clearTimeout(slideTimeout); showSlide(currentIndex+1); });
    prevButton?.addEventListener("click", () => { clearTimeout(slideTimeout); showSlide(currentIndex-1); });
    dots.forEach((dot, idx) => dot.addEventListener("click", () => { clearTimeout(slideTimeout); showSlide(idx); }));

    const slider = document.querySelector(".slider");
    if (slider) {
      slider.addEventListener("mouseenter", () => clearTimeout(slideTimeout));
      slider.addEventListener("mouseleave", restartTimeout);
      let startX = 0;
      slider.addEventListener("touchstart", e => startX = e.changedTouches[0].screenX);
      slider.addEventListener("touchend", e => {
        const endX = e.changedTouches[0].screenX;
        if (endX < startX - 50) showSlide(currentIndex+1);
        if (endX > startX + 50) showSlide(currentIndex-1);
      });
    }

    showSlide(0);
  }

  /* Hamburger */
  const hamburger = document.getElementById("hamburger");
  const navMenu   = document.getElementById("navMenu");
  hamburger?.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    document.getElementById("nav-links")?.classList.toggle("show");
  });
});
