// Redirect helper for “Mehr erfahren” buttons
function showContactPopup(property) {
  window.location.href = 'contact.html?property=' + encodeURIComponent(property);
}

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const nav       = document.querySelector("nav");
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!isOpen));
    hamburger.setAttribute("aria-label", isOpen ? "Menü öffnen" : "Menü schließen");
    nav.classList.toggle("show");
  });

  // Close mobile nav on link click
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("show")) hamburger.click();
    });
  });

  // Slider initialization
  const slider = document.querySelector(".slider");
  if (slider) {
    const slidesContainer = slider.querySelector(".slides");
    const slides          = slider.querySelectorAll(".slide");
    const dots            = slider.querySelectorAll(".dot");
    const prevBtn         = slider.querySelector(".prev");
    const nextBtn         = slider.querySelector(".next");
    let index = 0, timeout;
    const durations = [2500, 2500, 1000];

    function show(i) {
      index = (i + slides.length) % slides.length;
      slidesContainer.style.transform = `translateX(-${index * 100}vw)`;
      dots.forEach((d, idx) => d.classList.toggle("active", idx === index));
      clearTimeout(timeout);
      timeout = setTimeout(() => show(index + 1), durations[index]);
    }

    prevBtn && prevBtn.addEventListener("click", () => show(index - 1));
    nextBtn && nextBtn.addEventListener("click", () => show(index + 1));
    dots.forEach((d, idx) => d.addEventListener("click", () => show(idx)));

    // Swipe support
    let startX = 0;
    slider.addEventListener("touchstart", e => startX = e.changedTouches[0].screenX);
    slider.addEventListener("touchend", e => {
      const endX = e.changedTouches[0].screenX;
      if (endX < startX - 50) show(index + 1);
      if (endX > startX + 50) show(index - 1);
    });

    show(0);
  }
});
