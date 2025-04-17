document.addEventListener("DOMContentLoaded", () => {
  // SLIDER
  const slides = document.querySelectorAll(".slide"),
        container = document.querySelector(".slides"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dots = document.querySelectorAll(".dot");
  let index = 0, timeout,
      durations = [2500,2500,1000];

  function showSlide(i) {
    index = (i + slides.length) % slides.length;
    container.style.transform = `translateX(-${index*100}vw)`;
    dots.forEach((d,ii) => d.classList.toggle("active", ii===index));
    clearTimeout(timeout);
    timeout = setTimeout(() => showSlide(index+1), durations[index]);
  }
  next && next.addEventListener("click", () => { clearTimeout(timeout); showSlide(index+1); });
  prev && prev.addEventListener("click", () => { clearTimeout(timeout); showSlide(index-1); });
  dots.forEach((d, i) => d.addEventListener("click", () => { clearTimeout(timeout); showSlide(i); }));
  showSlide(0);

  // HAMBURGER
  const burger = document.getElementById("hamburger"),
        nav = document.getElementById("nav-links");
  burger && burger.addEventListener("click", () => nav.classList.toggle("show"));
});
