document.addEventListener("DOMContentLoaded", function () {
    // Hamburger menu toggle for mobile navigation
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("nav-active");
        // Optionally, animate hamburger icon (toggle a class)
        hamburger.classList.toggle("toggle");
    });

    // CTA Popup Handling
    document.getElementById("ctaButton").addEventListener("click", function () {
        document.getElementById("contactPopup").style.display = "block";
    });

    document.getElementById("closePopup").addEventListener("click", function () {
        document.getElementById("contactPopup").style.display = "none";
    });

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
