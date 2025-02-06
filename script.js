document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    window.addEventListener("scroll", function () {
        let navbar = document.querySelector("nav");
        if (window.scrollY > 50) {
            navbar.style.background = "#800020";
        } else {
            navbar.style.background = "rgba(128, 0, 32, 0.9)";
        }
    });
});
