document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000, 
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Pause autoplay on hover
    var swiperContainer = document.querySelector('.swiper-container');
    swiperContainer.addEventListener('mouseenter', function () {
        swiper.autoplay.stop();
    });
    swiperContainer.addEventListener('mouseleave', function () {
        swiper.autoplay.start();
    });

    // CTA Popup Handling
    document.getElementById("ctaButton").addEventListener("click", function () {
        document.getElementById("contactPopup").style.display = "block";
    });

    document.getElementById("closePopup").addEventListener("click", function () {
        document.getElementById("contactPopup").style.display = "none";
    });

    document.getElementById("submitPopup").addEventListener("click", function () {
        alert("Details submitted! We will contact you soon.");
        document.getElementById("contactPopup").style.display = "none";
    });
});
