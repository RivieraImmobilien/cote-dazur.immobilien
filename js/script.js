document.addEventListener("DOMContentLoaded", function() {
  // Slider
  let idx = 0, slides = document.querySelectorAll(".slide"), total = slides.length;
  const container = document.querySelector(".slides"), prev = document.querySelector(".prev"), next = document.querySelector(".next"), dots = document.querySelectorAll(".dot");
  const durations = [2500,2500,1000];
  let to;

  function show(i) {
    idx = (i + total) % total;
    container.style.transform = `translateX(-${idx*100}vw)`;
    dots.forEach(d=>d.classList.remove("active")); dots[idx].classList.add("active");
    clearTimeout(to); to = setTimeout(()=>show(idx+1), durations[idx]);
  }
  prev && prev.addEventListener("click", ()=>show(idx-1));
  next && next.addEventListener("click", ()=>show(idx+1));
  dots.forEach((d,i)=>d.addEventListener("click", ()=>show(i)));
  show(idx);

  // Hamburger
  const ham = document.getElementById("hamburger"), navL = document.getElementById("nav-links");
  ham.addEventListener("click", ()=>navL.classList.toggle("show"));

  // Contact Popup
  window.showContactPopup = function(prop) {
    const popup = document.getElementById("contactPopup"), txt = document.getElementById("popupText");
    txt.innerHTML = `Interessiert an <strong>${prop}</strong>? Hinterlassen Sie Ihre Kontaktdaten!`;
    popup.style.display = "flex";
  };
  document.querySelectorAll("#closePopup, #submitPopup").forEach(el=>el.addEventListener("click", ()=>document.getElementById("contactPopup").style.display="none"));
});
