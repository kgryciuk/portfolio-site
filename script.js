// Mobile menu toggle
var menuButton = document.getElementById('menu-button');
var nav = document.getElementById('nav');

menuButton.addEventListener('click', function () {
  nav.classList.toggle('open');
});

// Contact form validation
var form = document.getElementById('contact-form');

if (form) {// Check if the form exists on the page
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var result = document.getElementById('form-result');

    var nameError = name ? '' : 'Enter your name.';// Validate name field
    var emailError = '';
    if (!email) {
      emailError = 'Enter your email address.';// Validate email field
    } else if (!email.includes('@') || !email.includes('.')) {
      emailError = 'Enter a valid email, like name@example.com.';
    }
    var messageError = message ? '' : 'Enter a message.';// Validate message field

    document.getElementById('name-error').textContent = nameError;
    document.getElementById('email-error').textContent = emailError;
    document.getElementById('message-error').textContent = messageError;

    if (nameError || emailError || messageError) {// Error handling for form validation
      result.textContent = 'Your message was not sent. Fix the errors above.';
      result.style.color = '#b00020';
    } else {// Success handling for form validation
      result.textContent = 'Thanks, ' + name + '. Your message was sent.';
      result.style.color = '#1b6b2f';
      form.reset();
    }
  });
}