// Redirect helper for “Mehr erfahren” buttons
function showContactPopup(property) {
  window.location.href = 'contact.html?property=' + encodeURIComponent(property);
}

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const nav       = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
    hamburger.setAttribute("aria-label", expanded ? "Menü öffnen" : "Menü schließen");
    nav.classList.toggle("show");
  });

  // Close mobile nav on link click
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("show")) {
        hamburger.click();
      }
    });
  });

  // Slider
  const slidesContainer = document.querySelector(".slides");
  if (slidesContainer) {
    const slides = document.querySelectorAll(".slide");
    const dots   = document.querySelectorAll(".dot");
    const prev   = document.querySelector(".prev");
    const next   = document.querySelector(".next");
    let index = 0, timeout;
    const durations = [2500, 2500, 1000];

    function show(i) {
      index = (i + slides.length) % slides.length;
      slidesContainer.style.transform = `translateX(-${index * 100}vw)`;
      dots.forEach((d, idx) => d.classList.toggle("active", idx === index));
      clearTimeout(timeout);
      timeout = setTimeout(() => show(index+1), durations[index]);
    }
    prev && prev.addEventListener("click", () => show(index-1));
    next && next.addEventListener("click", () => show(index+1));
    dots.forEach((d, idx) => d.addEventListener("click", () => show(idx)));

    // Swipe
    let startX = 0;
    slidesContainer.addEventListener("touchstart", e => startX = e.touches[0].screenX);
    slidesContainer.addEventListener("touchend", e => {
      const endX = e.changedTouches[0].screenX;
      if (endX < startX - 50) show(index+1);
      if (endX > startX + 50) show(index-1);
    });

    show(0);
  }
});
