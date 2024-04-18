const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

$(document).ready(function() {
    $('.hero-content').fadeIn(1500); // Fade in animation for the hero content
    $('.work-experience').slideDown(1500); // Slide down animation for the work experience section
});
