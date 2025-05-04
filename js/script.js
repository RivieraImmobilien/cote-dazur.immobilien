document.addEventListener('DOMContentLoaded', () => {
  // Hamburger toggle
  const hamb = document.getElementById('hamburger');
  const nav = document.getElementById('nav-links');
  hamb.addEventListener('click', () => nav.classList.toggle('show'));

  // Hero slider
  const slides = document.querySelector('.slides');
  const slideEls = document.querySelectorAll('.slide');
  const prev = document.querySelector('.prev'), next = document.querySelector('.next');
  const dots = document.querySelectorAll('.dot');
  let idx = 0, timer;
  const durations = [2500,2500,1000];
  function show(n){
    idx = (n+slideEls.length)%slideEls.length;
    slides.style.transform = `translateX(-${idx*100}vw)`;
    dots.forEach(d=>d.classList.remove('active')); dots[idx].classList.add('active');
    clearTimeout(timer); timer = setTimeout(()=>show(idx+1), durations[idx]);
  }
  prev.onclick = ()=>{clearTimeout(timer); show(idx-1)};
  next.onclick = ()=>{clearTimeout(timer); show(idx+1)};
  dots.forEach((d,i)=>d.onclick=()=>{clearTimeout(timer); show(i)});
  show(0);

  // Contact popup (if used)
  window.showContactPopup = (prop) => {
    alert(`Interesse an ${prop}? Wir melden uns!`);
  };
});
