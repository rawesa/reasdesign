// Menü Geçişi
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function() {
    nav.classList.toggle("active");
  });
});

// Scroll Animasyonları
window.addEventListener("scroll", function() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
});
