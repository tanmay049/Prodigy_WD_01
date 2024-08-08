// Change navbar background color on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#3700b3'; // Darker Purple
    } else {
        navbar.style.backgroundColor = '#6200ea'; // Deep Purple
    }
});