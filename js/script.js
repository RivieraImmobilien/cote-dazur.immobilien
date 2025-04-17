document.addEventListener("DOMContentLoaded", () => {
  // Slider
  const slides    = document.querySelectorAll(".slide"),
        container = document.querySelector(".slides"),
        prevBtn   = document.querySelector(".prev"),
        nextBtn   = document.querySelector(".next"),
        dots      = document.querySelectorAll(".dot");
  let idx = 0, timer;
  const durations = [2500, 2500, 1000];

  function show(i) {
    idx = (i + slides.length) % slides.length;
    container.style.transform = `translateX(-${idx*100}vw)`;
    dots.forEach((d,j) => d.classList.toggle("active", j===idx));
    clearTimeout(timer);
    timer = setTimeout(() => show(idx+1), durations[idx]);
  }
  prevBtn && prevBtn.addEventListener("click", () => { clearTimeout(timer); show(idx-1); });
  nextBtn && nextBtn.addEventListener("click", () => { clearTimeout(timer); show(idx+1); });
  dots.forEach((d,i) => d.addEventListener("click", () => { clearTimeout(timer); show(i); }));
  show(0);

  // Hamburger
  const burger = document.getElementById("hamburger"),
        nav     = document.getElementById("nav-links");
  burger && burger.addEventListener("click", () => nav.classList.toggle("show"));
});
