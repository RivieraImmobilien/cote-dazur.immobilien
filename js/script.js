document.addEventListener("DOMContentLoaded", () => {
  /* HERO SLIDER */
  const slides = document.querySelectorAll(".slide"),
        container = document.querySelector(".slides"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dots = document.querySelectorAll(".dot");
  let idx = 0, timeout,
      durations = [2500, 2500, 1000];

  function showSlide(i) {
    idx = (i + slides.length) % slides.length;
    container.style.transform = `translateX(-${idx * 100}vw)`;
    dots.forEach((d,j) => d.classList.toggle("active", j === idx));
    clearTimeout(timeout);
    timeout = setTimeout(() => showSlide(idx + 1), durations[idx]);
  }
  next && next.addEventListener("click", () => { clearTimeout(timeout); showSlide(idx + 1); });
  prev && prev.addEventListener("click", () => { clearTimeout(timeout); showSlide(idx - 1); });
  dots.forEach((d,i) => d.addEventListener("click", () => { clearTimeout(timeout); showSlide(i); }));
  showSlide(0);

  /* HAMBURGER MENU */
  const burger = document.getElementById("hamburger"),
        nav    = document.getElementById("nav-links");
  burger && burger.addEventListener("click", () => nav.classList.toggle("show"));
});
