document.addEventListener("DOMContentLoaded", () => {
  // SLIDER
  const slides = document.querySelector(".slides");
  const total = document.querySelectorAll(".slide").length;
  const dots = document.querySelectorAll(".dot");
  let idx=0, timer;

  function show(n) {
    if (n<0) idx=total-1;
    else if(n>=total) idx=0;
    else idx=n;
    slides.style.transform = `translateX(-${idx*100}%)`;
    dots.forEach((d,i)=>d.classList.toggle("active", i===idx));
  }
  function next(){ show(idx+1); }
  document.querySelector(".next").addEventListener("click", ()=>{ clearTimeout(timer); next(); });
  document.querySelector(".prev").addEventListener("click", ()=>{ clearTimeout(timer); show(idx-1); });
  dots.forEach((d,i)=>d.addEventListener("click", ()=>{ clearTimeout(timer); show(i); }));
  slides.parentElement.addEventListener("mouseenter", ()=>clearTimeout(timer));
  slides.parentElement.addEventListener("mouseleave", ()=>timer=setTimeout(next, [2500,2500,1000][idx]));
  timer = setTimeout(next, 2500);

  // HAMBURGER
  const ham = document.getElementById("hamburger"), nav = document.getElementById("nav-links");
  ham.addEventListener("click", ()=>nav.classList.toggle("show"));

  // Show contact popup
  window.showContactPopup = property => {
    alert(`Interessiert an ${property}? Bitte kontaktieren Sie uns über WhatsApp oder das Kontaktformular.`);
  };
});
