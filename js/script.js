```

---

### 3. **js/script.js**
```js
document.addEventListener("DOMContentLoaded", () => {
  // Slider (unchanged)
  const slides = document.querySelectorAll(".slide"),
        container = document.querySelector(".slides"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dots = document.querySelectorAll(".dot");
  let idx = 0, timeout;
  const durations = [2500, 2500, 1000];

  function show(n) {
    idx = (n + slides.length) % slides.length;
    container.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[idx].classList.add("active");
    clearTimeout(timeout);
    timeout = setTimeout(() => show(idx + 1), durations[idx]);
  }

  prev.addEventListener("click", () => show(idx - 1));
  next.addEventListener("click", () => show(idx + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => show(i)));

  show(0);

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
});


