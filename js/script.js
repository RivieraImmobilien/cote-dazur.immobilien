<<<<<<< Updated upstream
document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menu toggle for mobile navigation
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("nav-active");
        // Optionally, animate hamburger icon (toggle a class)
        hamburger.classList.toggle("toggle");
    });
=======
let slideIndex = 0;
>>>>>>> Stashed changes

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function moveSlide(step) {
    let slides = document.querySelectorAll(".slide");
    slideIndex += step;
    if (slideIndex < 1) {
        slideIndex = slides.length;
    } else if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

<<<<<<< Updated upstream
    document.getElementById("submitPopup").addEventListener("click", function () {
        // Simple form validation
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();

        if (!name || !email || !phone) {
            alert("Bitte füllen Sie alle Felder aus.");
            return;
        }
        // Basic email format check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
            return;
        }
        alert("Details submitted! We will contact you soon.");
        document.getElementById("contactPopup").style.display = "none";
    });
});
=======
// Start the slider when the page loads
document.addEventListener("DOMContentLoaded", showSlides);
>>>>>>> Stashed changes
