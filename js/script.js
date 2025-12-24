/* =========================
   MOBILE NAVBAR TOGGLE
========================= */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

/* =========================
   TOGGLE HIDDEN SECTIONS
========================= */
const toggleBtn = document.querySelector('.toggle-btn');
const hiddenSection = document.querySelector('.hidden');

if (toggleBtn && hiddenSection) {
  toggleBtn.addEventListener('click', () => {
    hiddenSection.classList.toggle('hidden');

    toggleBtn.textContent =
      hiddenSection.classList.contains('hidden')
        ? 'Show Achievements'
        : 'Hide Achievements';
  });
}

/* =========================
   ACTIVE NAV LINK
========================= */
const currentPage = window.location.pathname.split('/').pop();

document.querySelectorAll('.nav-links a').forEach(link => {
  const linkPage = link.getAttribute('href');

  if (linkPage === currentPage || 
      (currentPage === '' && linkPage === 'index.html')) {
    link.classList.add('active');
  }
});
