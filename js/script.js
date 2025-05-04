document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!isExpanded));
    hamburger.setAttribute("aria-label", isExpanded ? "Menü öffnen" : "Menü schließen");
    nav.classList.toggle("show");
  });

  // Optional: Close menu when a nav link is clicked (for mobile UX)
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("show")) {
        nav.classList.remove("show");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Menü öffnen");
      }
    });
  });
});
