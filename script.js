// Simple JS for interaction

// Example: Show an alert when user clicks "Projects"
document.addEventListener("DOMContentLoaded", function () {
  const projectsLink = document.querySelector("nav a[href='#Projects']");
  if (projectsLink) {
    projectsLink.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Projects section is coming soon!");
    });
  }

  // Example: Smooth scroll to sections
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.textContent.trim().toLowerCase();
      const targetSection = document.querySelector(`section h2:contains('${this.textContent}')`);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
