document.addEventListener("DOMContentLoaded", function () {
    // Property Interest Pop-up Handling
    const contactPopup = document.getElementById("contactPopup");
    const closePopup = document.getElementById("closePopup");

    // Function to display the pop-up with the selected property
    window.showContactPopup = function (propertyName) {
        const popupText = document.getElementById("popupText");
        popupText.textContent = `Sie interessieren sich für ${propertyName}. Bitte hinterlassen Sie Ihre E-Mail und Telefonnummer für weitere Informationen.`;
        contactPopup.style.display = "block";
    };

    // Close the pop-up when the 'Schließen' button is clicked
    if (closePopup) {
        closePopup.addEventListener("click", function () {
            contactPopup.style.display = "none";
        });
    }

    // WhatsApp Integration
    const whatsappButton = document.getElementById("whatsappButton");
    if (whatsappButton) {
        whatsappButton.addEventListener("click", function () {
            const phoneNumber = "+491234567890"; // Replace with your WhatsApp number in international format
            const message = "Ich interessiere mich für Ihre Immobilienangebote.";
            window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, "_blank");
        });
    }
});
