document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!expanded));
      hamburger.setAttribute("aria-label", expanded ? "Menü öffnen" : "Menü schließen");
      navLinks.classList.toggle("show");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("show")) hamburger.click();
      });
    });
  }

  // Hero Slider
  const slidesContainer = document.querySelector(".slides");
  const slides          = document.querySelectorAll(".slide");
  const prevBtn         = document.querySelector(".prev");
  const nextBtn         = document.querySelector(".next");
  const dots            = document.querySelectorAll(".slider-dots .dot");
  let index = 0, interval, startX = 0;

  function show(i) {
    index = (i + slides.length) % slides.length;
    slidesContainer.style.transform = `translateX(-${index * 100}vw)`;
    dots.forEach((d, idx) => d.classList.toggle("active", idx === index));
  }
  function start() { interval = setInterval(() => show(index + 1), 3000); }
  function stop()  { clearInterval(interval); }

  if (slides.length) {
    dots.forEach((d, idx) => d.addEventListener("click", () => { show(idx); stop(); start(); }));
    prevBtn && prevBtn.addEventListener("click", () => { show(index - 1); stop(); start(); });
    nextBtn && nextBtn.addEventListener("click", () => { show(index + 1); stop(); start(); });

    slidesContainer.addEventListener("touchstart", e => {
      stop();
      startX = e.changedTouches[0].screenX;
    });
    slidesContainer.addEventListener("touchend", e => {
      const endX = e.changedTouches[0].screenX;
      if (endX < startX - 50) show(index + 1);
      if (endX > startX + 50) show(index - 1);
      start();
    });

    show(0);
    start();
  }

  // "Mehr erfahren" Buttons
  document.querySelectorAll(".property-button, .property button").forEach(btn => {
    btn.addEventListener("click", () => {
      const prop = btn.getAttribute("data-property") || btn.textContent;
      window.location.href = `contact.html?property=${encodeURIComponent(prop)}`;
    });
  });
});
