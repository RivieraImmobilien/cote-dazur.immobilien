document.addEventListener("DOMContentLoaded", function () {
  /* ==== SLIDER ==== */
  const slides = document.querySelectorAll(".slide");
  const container = document.querySelector(".slides");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");
  let idx = 0, timeout;
  const durations = [2500, 2500, 1000];

  function show(n) {
    idx = (n + slides.length) % slides.length;
    container.style.transform = `translateX(-${idx * 100}vw)`;
    dots.forEach((d,i) => d.classList.toggle("active", i === idx));
    clearTimeout(timeout);
    timeout = setTimeout(() => show(idx + 1), durations[idx]);
  }
  prev?.addEventListener("click", () => { clearTimeout(timeout); show(idx - 1); });
  next?.addEventListener("click", () => { clearTimeout(timeout); show(idx + 1); });
  dots.forEach((d,i) => d.addEventListener("click", () => { clearTimeout(timeout); show(i); }));
  show(0);

  /* ==== HAMBURGER MENU ==== */
  const hamb = document.getElementById("hamburger");
  const nav = document.getElementById("navMenu");
  hamb?.addEventListener("click", () => {
    nav.classList.toggle("active");
    document.getElementById("nav-links")?.classList.toggle("show");
  });

  /* ==== VALUATION (Adresse + Karte) ==== */
  const input = document.getElementById("address");
  const display = document.getElementById("addressDisplay");
  const mapEl = document.getElementById("map");
  if (input && display && mapEl && window.google?.maps) {
    // Karte
    const map = new google.maps.Map(mapEl, {
      center: { lat: 43.6, lng: 7.1 },
      zoom: 12
    });
    const marker = new google.maps.Marker({ map });
    // Autocomplete für Frankreich
    const ac = new google.maps.places.Autocomplete(input, {
      componentRestrictions: { country: "fr" },
      types: ["address"]
    });
    ac.bindTo("bounds", map);
    // Live‑Overlay beim Tippen
    input.addEventListener("input", () => display.textContent = input.value);
    // Overlay + Karte bei Auswahl
    ac.addListener("place_changed", () => {
      const place = ac.getPlace();
      if (!place.geometry) return;
      map.setCenter(place.geometry.location);
      map.setZoom(15);
      marker.setPosition(place.geometry.location);
      display.textContent = place.formatted_address;
    });
  }
});
