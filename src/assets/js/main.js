document.addEventListener('DOMContentLoaded', () => {
    // Load navigation
    fetch('/src/components/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-container').innerHTML = data;
            initializeNavigation();
        });
});

function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    const body = document.body;
    
    // Create overlay if it doesn't exist
    let overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        body.appendChild(overlay);
    }

    // Toggle menu
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    });

    // Close menu when clicking links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Highlight current page in navigation
    const currentPage = window.location.pathname;
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}