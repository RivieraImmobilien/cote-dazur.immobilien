document.addEventListener("DOMContentLoaded", function () {
  // SLIDER
  const slides = document.querySelectorAll(".slide");
  const slidesContainer = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let idx = 0, slideTimeout;
  const durations = [2500,2500,1000];
  function showSlide(i){
    idx = (i+slides.length)%slides.length;
    slidesContainer.style.transform = `translateX(-${idx*100}vw)`;
    dots.forEach(d=>d.classList.remove("active"));
    dots[idx].classList.add("active");
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(()=>showSlide(idx+1), durations[idx]);
  }
  prevBtn.onclick = ()=>showSlide(idx-1);
  nextBtn.onclick = ()=>showSlide(idx+1);
  dots.forEach((d,i)=>d.onclick=()=>showSlide(i));
  showSlide(0);

  // Hamburger
  const ham = document.getElementById("hamburger");
  const nav = document.getElementById("navMenu");
  const navLinks = document.getElementById("nav-links");
  ham.addEventListener("click", ()=>{
    navLinks.classList.toggle("show");
  });

  // Contact Popup (if present)
  window.showContactPopup = function(prop){
    const popup = document.getElementById("contactPopup");
    const text = document.getElementById("popupText");
    popup.style.display="flex";
    text.textContent=`Interessiert an ${prop}? Hinterlassen Sie Ihre Daten.`;
  };
  const closeBtn = document.getElementById("closePopup");
  if(closeBtn) closeBtn.onclick = ()=>document.getElementById("contactPopup").style.display="none";
});
