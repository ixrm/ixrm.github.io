/* =========================
   MOBILE NAVBAR TOGGLE
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  /* =========================
     TOGGLE HIDDEN SECTION
  ========================= */
  const toggleBtn = document.querySelector(".toggle-btn");
  const hiddenSection = document.querySelector("[data-toggle-section]");

  if (toggleBtn && hiddenSection) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = hiddenSection.classList.toggle("hidden");

      toggleBtn.textContent = isHidden
        ? "Show Achievements"
        : "Hide Achievements";
    });
  }

  /* =========================
     ACTIVE NAV LINK
  ========================= */
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});
