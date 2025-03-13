document.addEventListener("DOMContentLoaded", function () {
  // SLIDER FUNCTIONALITY
  const slides = document.querySelectorAll(".slide");
  const slidesContainer = document.querySelector(".slides");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;
  const totalSlides = slides.length;
  let slideInterval;

  // Show specific slide
  function showSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Show next slide
  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  // Show previous slide
  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Auto slide
  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 4000); // 4 seconds interval
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  // Event listeners for manual navigation
  if (nextButton) {
    nextButton.addEventListener("click", function () {
      stopSlideShow();
      nextSlide();
      startSlideShow();
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      stopSlideShow();
      prevSlide();
      startSlideShow();
    });
  }

  startSlideShow();

  // CONTACT POPUP FUNCTIONALITY
  window.showContactPopup = function (propertyName) {
    const popup = document.getElementById("contactPopup");
    const popupText = document.getElementById("popupText");
    popupText.innerHTML = `Interessiert an <strong>${propertyName}</strong>? Bitte hinterlassen Sie Ihre Kontaktdaten!`;
    popup.style.display = "flex";
  };

  const closePopup = document.getElementById("closePopup");
  if (closePopup) {
    closePopup.addEventListener("click", function () {
      document.getElementById("contactPopup").style.display = "none";
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Vielen Dank! Wir werden uns in Kürze bei Ihnen melden.");
      document.getElementById("contactPopup").style.display = "none";
    });
  }
});
