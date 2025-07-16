document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Simple validation (fields are required by HTML)
        formMessage.textContent = 'Thank you for reaching out! We will get back to you soon.';
        form.reset();
    });
}); 