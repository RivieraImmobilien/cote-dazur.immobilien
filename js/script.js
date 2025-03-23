document.addEventListener("DOMContentLoaded", function () {
  /* SLIDER FUNCTIONALITY */
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  const totalSlides = slides.length;
  let slideTimeout;
  // Custom durations (ms): 2500 for Haus verkaufen/ Haus kaufen, 1000 for Dienstleistungen
  const slideDurations = [2500, 2500, 1000];

  function showSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
    updateDots();
    restartSlideTimeout();
  }

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function restartSlideTimeout() {
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(nextSlide, slideDurations[currentIndex]);
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      clearTimeout(slideTimeout);
      nextSlide();
    });
  }
  if (prevButton) {
    prevButton.addEventListener("click", () => {
      clearTimeout(slideTimeout);
      prevSlide();
    });
  }
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      clearTimeout(slideTimeout);
      showSlide(index);
    });
  });
  const slider = document.querySelector(".slider");
  if (slider) {
    slider.addEventListener("mouseenter", () => clearTimeout(slideTimeout));
    slider.addEventListener("mouseleave", restartSlideTimeout);
    let touchStartX = 0, touchEndX = 0;
    slider.addEventListener("touchstart", e => {
      touchStartX = e.changedTouches[0].screenX;
    });
    slider.addEventListener("touchend", e => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) nextSlide();
      if (touchEndX > touchStartX + 50) prevSlide();
    });
  }
  showSlide(currentIndex);

  /* HAMBURGER MENU TOGGLE */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    // Also toggle "show" on the nav-links ul
    const navLinks = document.getElementById("nav-links");
    if (navLinks) {
      navLinks.classList.toggle("show");
    }
  });

  /* INTERACTIVE PROPERTY FILTER */
  const filterForm = document.getElementById("filterForm");
  if (filterForm) {
    filterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const keyword = document.getElementById("filterKeyword").value.toLowerCase();
      const priceMin = parseInt(document.getElementById("filterPriceMin").value) || 0;
      const priceMax = parseInt(document.getElementById("filterPriceMax").value) || Infinity;
      const properties = document.querySelectorAll(".property");
      properties.forEach(prop => {
        const propText = prop.innerText.toLowerCase();
        // Assume price is mentioned as "Preis: €X" in the text
        const priceMatch = propText.match(/preis:\s*€([\d,.]+)/i);
        let price = priceMatch ? parseInt(priceMatch[1].replace(/[,.]/g, "")) : 0;
        if (propText.includes(keyword) && price >= priceMin && price <= priceMax) {
          prop.style.display = "block";
        } else {
          prop.style.display = "none";
        }
      });
    });
  }

  /* MODAL CONTACT POPUP */
  const contactModal = document.getElementById("contactModal");
  const closeModal = document.getElementById("closeModal");
  // Dummy function for "Mehr erfahren" buttons; you can expand this function as needed
  window.showContactPopup = function(propertyName) {
    if (contactModal) {
      contactModal.style.display = "block";
      // Optionally populate modal with propertyName details
    }
  };
  if (closeModal) {
    closeModal.addEventListener("click", function () {
      contactModal.style.display = "none";
    });
  }
});
