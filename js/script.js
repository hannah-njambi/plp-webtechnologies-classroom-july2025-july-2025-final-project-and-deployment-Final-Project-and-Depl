// Toggle mobile menu
const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact form validation & feedback
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
      formMessage.textContent = "Thank you! Your message has been sent.";
      form.reset();
    } else {
      formMessage.textContent = "Please fill out all fields.";
    }
  });
}
