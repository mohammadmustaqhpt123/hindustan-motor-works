document.addEventListener('DOMContentLoaded', () => {
    // Reveal elements on scroll
    const revealOnScroll = () => {
        const elements = document.querySelectorAll('.product-card, .hero');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});