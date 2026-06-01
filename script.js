document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
  
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
  
        menuToggle.textContent =
          navLinks.classList.contains("active") ? "✕" : "☰";
      });
  
      // close menu when clicking a link
      navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          menuToggle.textContent = "☰";
        });
      });
    }
  
    /* =========================
       SMOOTH SCROLL
    ========================= */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);
  
        if (target) {
          e.preventDefault();
  
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  
    /* =========================
       CONTACT FORM FEEDBACK
    ========================= */
    const form = document.querySelector("form");
  
    if (form) {
      form.addEventListener("submit", () => {
        alert("Message sent successfully! I will get back to you soon.");
      });
    }
  
  });