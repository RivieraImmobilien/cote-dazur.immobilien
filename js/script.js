document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Full-width Slider
  const slides = document.querySelectorAll(".slide");
  const slidesContainer = document.querySelector(".slides");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");
  let current = 0, total = slides.length, timeout;
  const durations = [2500,2500,1000];
  function goTo(n) {
    current = (n<0?total-1:n>=total?0:n);
    slidesContainer.style.transform = `translateX(-${current*100}%)`;
    dots.forEach(d=>d.classList.toggle("active", d.dataset.index==current));
    clearTimeout(timeout);
    timeout = setTimeout(()=>goTo(current+1), durations[current]);
  }
  prev && prev.addEventListener("click", ()=>goTo(current-1));
  next && next.addEventListener("click", ()=>goTo(current+1));
  dots.forEach(d=>d.addEventListener("click", ()=>goTo(+d.dataset.index)));
  goTo(0);

  // Contact Popup (if used)
  window.showContactPopup = (name) => {
    alert(`Interessiert an ${name}? Wir kontaktieren Sie!`);
  };
});
