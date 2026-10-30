// Mobile menu toggle
var menuButton = document.getElementById('menu-button');
var nav = document.getElementById('nav');

menuButton.addEventListener('click', function () {
  nav.classList.toggle('open');
});

// Contact form validation
var form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var result = document.getElementById('form-result');

    var nameError = name ? '' : 'Enter your name.';
    var emailError = '';
    if (!email) {
      emailError = 'Enter your email address.';
    } else if (!email.includes('@') || !email.includes('.')) {
      emailError = 'Enter a valid email, like name@example.com.';
    }
    var messageError = message ? '' : 'Enter a message.';

    document.getElementById('name-error').textContent = nameError;
    document.getElementById('email-error').textContent = emailError;
    document.getElementById('message-error').textContent = messageError;

    if (nameError || emailError || messageError) {
      result.textContent = 'Your message was not sent. Fix the errors above.';
      result.style.color = '#b00020';
    } else {
      result.textContent = 'Thanks, ' + name + '. Your message was sent.';
      result.style.color = '#1b6b2f';
      form.reset();
    }
  });
}