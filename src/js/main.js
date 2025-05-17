// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for form submissions or other interactive elements here

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle form submission logic here
            alert('Thank you for contacting Hindustan Motor Works!');
        });
    }

    // Additional JavaScript functionality can be added here
});