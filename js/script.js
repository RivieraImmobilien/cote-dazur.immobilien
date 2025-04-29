document.addEventListener("DOMContentLoaded", () => {
  // Slider
  const slides = document.querySelectorAll(".slide"),
        container = document.querySelector(".slides"),
        dots = document.querySelectorAll(".dot"),
        durations = [2500,2500,1000];
  let index=0, timeout;
  function show(i){
    index = (i+slides.length)%slides.length;
    container.style.transform = `translateX(-${index*100}vw)`;
    dots.forEach((d,ni)=>d.classList.toggle("active",ni===index));
    clearTimeout(timeout);
    timeout = setTimeout(()=>show(index+1),durations[index]);
  }
  document.querySelector(".next")?.addEventListener("click",()=>{clearTimeout(timeout);show(index+1);});
  document.querySelector(".prev")?.addEventListener("click",()=>{clearTimeout(timeout);show(index-1);});
  dots.forEach((d,i)=>d.addEventListener("click",()=>{clearTimeout(timeout);show(i);}));
  show(0);

  // Hamburger
  document.getElementById("hamburger")?.addEventListener("click",()=>{
    document.getElementById("navMenu").classList.toggle("active");
    document.getElementById("nav-links").classList.toggle("show");
  });

  // Contact Popup
  window.showContactPopup = propertyName => {
    const pop=document.getElementById("contactPopup"),
          txt=document.getElementById("popupText");
    if(!pop||!txt) return;
    txt.innerHTML = `Interessiert an <strong>${propertyName}</strong>?`;
    pop.style.display="flex";
  };
  document.getElementById("closePopup")?.addEventListener("click",()=>{
    document.getElementById("contactPopup").style.display="none";
  });
});
