// Mobile navbar toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

// Hidden section toggle
function toggleSection(id) {
  const section = document.getElementById(id);
  section.style.display =
    section.style.display === "block" ? "none" : "block";
}
