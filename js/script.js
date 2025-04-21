document.addEventListener("DOMContentLoaded", () => {
  // Slider
  const slides = document.querySelectorAll(".slide"),
        container = document.querySelector(".slides"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dots = document.querySelectorAll(".dot");
  let idx = 0, timeout;
  const durations = [2500, 2500, 1000];

  function show(n) {
    idx = (n + slides.length) % slides.length;
    container.style.transform = `translateX(-${idx * 100}vw)`;
    dots.forEach(d => d.classList.remove("active"));
    dots[idx].classList.add("active");
    clearTimeout(timeout);
    timeout = setTimeout(() => show(idx + 1), durations[idx]);
  }
  prev.addEventListener("click", () => show(idx - 1));
  next.addEventListener("click", () => show(idx + 1));
  dots.forEach((d,i) => d.addEventListener("click", ()=> show(i)));
  show(0);

  // Hamburger
  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-links").classList.toggle("show");
  });

  // Contact Popup Buttons (if any)
  if (window.showContactPopup) return;
  window.showContactPopup = property => alert(`Interessiert an ${property}? Wir melden uns!`);
});
