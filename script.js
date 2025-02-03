document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navbar = document.querySelector("nav");

    // Menü Aç/Kapat Butonu (Mobil)
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Navbar Scroll Efekti
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "#600000";
            navbar.style.transition = "0.3s";
        } else {
            navbar.style.background = "#8B0000";
        }
    });
});
