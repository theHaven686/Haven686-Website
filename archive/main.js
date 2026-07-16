// Haven 686 — main.js

// Sticky nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 2px 24px rgba(0,0,0,0.28)';
  } else {
    nav.style.boxShadow = '0 2px 16px rgba(0,0,0,0.18)';
  }
});

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('nav-mobile');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
}
