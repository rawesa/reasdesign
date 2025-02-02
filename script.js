document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });

    // Açılır Menü Mobil
    const navLinks = document.querySelector(".nav-links");
    const toggleMenu = document.createElement("button");
    toggleMenu.innerText = "☰";
    toggleMenu.classList.add("menu-toggle");
    document.querySelector("nav").appendChild(toggleMenu);

    toggleMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

// Açılır Not
function openNote() {
    document.getElementById("note").classList.add("visible");
}

function closeNote() {
    document.getElementById("note").classList.remove("visible");
}
