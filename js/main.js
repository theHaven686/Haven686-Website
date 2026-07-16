// Haven 686 — main.js

// Sticky nav shadow on scroll
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 2px 24px rgba(0,0,0,0.28)'
      : '0 2px 16px rgba(0,0,0,0.18)';
  });
}

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('nav-mobile');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
}

// Our Work dropdown
const dropdownBtn = document.querySelector('.nav-dropdown-btn');
const dropdown = document.querySelector('.nav-dropdown');
if (dropdownBtn && dropdown) {
  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });
  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
  });
}

// Carousel
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');
let current = 0;

function goToSlide(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(current - 1));
if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(current + 1));
dots.forEach(dot => {
  dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.slide)));
});

// Auto-advance removed — manual navigation only
