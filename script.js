document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple typed text effect for the hero section
const typedEl = document.getElementById('typed');
if (typedEl) {
  const text = 'Welcome to my 90s-themed portfolio built with HTML, CSS and JavaScript!';
  let i = 0;
  (function type() {
    typedEl.textContent += text.charAt(i);
    i += 1;
    if (i < text.length) {
      setTimeout(type, 80);
    }
  })();
}

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
