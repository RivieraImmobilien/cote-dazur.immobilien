document.addEventListener("DOMContentLoaded",function(){
  // Hamburger toggle
  document.getElementById("hamburger").addEventListener("click",function(){
    const ul= document.getElementById("nav-links");
    ul.classList.toggle("show");
  });

  // Slider
  const slidesContainer=document.querySelector(".slides"),
        slides=document.querySelectorAll(".slide"),
        prev=document.querySelector(".prev"),
        next=document.querySelector(".next"),
        dots=document.querySelectorAll(".dot");
  let idx=0, timer;
  const durations=[2500,2500,1000];
  function show(i){
    idx=(i+slides.length)%slides.length;
    slidesContainer.style.transform=`translateX(-${idx*100}vw)`;
    dots.forEach(d=>d.classList.remove("active"));
    dots[idx].classList.add("active");
    clearTimeout(timer);
    timer=setTimeout(()=>show(idx+1),durations[idx]);
  }
  prev&&prev.addEventListener("click",()=>show(idx-1));
  next&&next.addEventListener("click",()=>show(idx+1));
  dots.forEach((d,i)=>d.addEventListener("click",()=>show(i)));
  show(0);
});
