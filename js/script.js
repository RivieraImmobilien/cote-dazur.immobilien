document.addEventListener("DOMContentLoaded", () => {
  /* SLIDER */
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  const durations = [2500, 2500, 1000];
  let timeout;

  function showSlide(i) {
    currentIndex = (i + slides.length) % slides.length;
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
    dots.forEach((d, idx) => d.classList.toggle("active", idx === currentIndex));
    clearTimeout(timeout);
    timeout = setTimeout(() => showSlide(currentIndex + 1), durations[currentIndex]);
  }

  nextBtn?.addEventListener("click", () => showSlide(currentIndex + 1));
  prevBtn?.addEventListener("click", () => showSlide(currentIndex - 1));
  dots.forEach((dot, idx) => dot.addEventListener("click", () => showSlide(idx)));
  showSlide(0);

  /* HAMBURGER */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
