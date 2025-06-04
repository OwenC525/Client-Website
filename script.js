'use strict';

// DOM Elements
const navbar = document.querySelector('[data-navbar]');
const navToggleBtn = document.querySelector('[data-nav-toggler]');
const navLinks = document.querySelectorAll('[data-nav-link]');
const navbarList = document.querySelector('[data-navbar-list]');

// Toggle Mobile Menu
const toggleMobileMenu = () => {
    navbarList.classList.toggle('active');
    navToggleBtn.classList.toggle('active');
    document.body.classList.toggle('nav-active');
};

// Close Mobile Menu
const closeMobileMenu = () => {
    navbarList.classList.remove('active');
    navToggleBtn.classList.remove('active');
    document.body.classList.remove('nav-active');
};

// Event Listeners
navToggleBtn.addEventListener('click', toggleMobileMenu);

navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) {
        closeMobileMenu();
    })
});

// Your existing header scroll effect
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

// Your existing smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});