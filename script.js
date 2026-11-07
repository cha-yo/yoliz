
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close mobile navigation
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a navigation link
const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
