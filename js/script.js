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
