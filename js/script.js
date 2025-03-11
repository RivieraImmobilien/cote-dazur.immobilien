document.addEventListener("DOMContentLoaded", function () {
    // Popup Handling
    const ctaButton = document.getElementById("ctaButton");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const submitPopup = document.getElementById("submitPopup");

    if (ctaButton) {
        ctaButton.addEventListener("click", function () {
            popup.style.display = "block";
        });
    }

    if (closePopup) {
        closePopup.addEventListener("click", function () {
            popup.style.display = "none";
        });
    }

    if (submitPopup) {
        submitPopup.addEventListener("click", function () {
            alert("Details submitted! We will contact you soon.");
            popup.style.display = "none";
        });
    }

    // WhatsApp Integration
    const whatsappButton = document.getElementById("whatsappButton");
    if (whatsappButton) {
        whatsappButton.addEventListener("click", function () {
            const phoneNumber = "YOUR_PHONE_NUMBER"; // Change this to your WhatsApp number
            window.open(`https://wa.me/${phoneNumber}?text=I'm%20interested%20in%20your%20properties!`, "_blank");
        });
    }
});
