document.addEventListener("DOMContentLoaded", function () {
  // Existing Popup Handling for generic CTA button
  const ctaButton = document.getElementById("ctaButton");
  const popup = document.getElementById("contactPopup");
  const closePopup = document.getElementById("closePopup");
  const submitPopup = document.getElementById("submitPopup");

  if (ctaButton) {
    ctaButton.addEventListener("click", function () {
      // Default message for general inquiries
      showContactPopup('Allgemein');
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

  // WhatsApp Integration (if you decide to add a WhatsApp button later)
  const whatsappButton = document.getElementById("whatsappButton");
  if (whatsappButton) {
    whatsappButton.addEventListener("click", function () {
      const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with your WhatsApp number
      window.open(`https://wa.me/${phoneNumber}?text=I'm%20interested%20in%20your%20properties!`, "_blank");
    });
  }
});

// NEW FUNCTION: Show Contact Popup with a Dynamic Message
function showContactPopup(propertyName) {
  const popup = document.getElementById("contactPopup");
  const popupText = document.getElementById("popupText");

  if (popupText) {
    popupText.innerHTML = `Interessiert an <strong>${propertyName}</strong>? Hinterlassen Sie Ihre Kontaktdaten!`;
  }
  if (popup) {
    popup.style.display = "flex"; // Using flex to center the popup
  }
}
