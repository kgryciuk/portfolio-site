// Mobile menu toggle
var toggle = document.getElementById('menuToggle');
var nav = document.getElementById('siteNav');
if (toggle && nav) {
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? 'Close' : 'Menu';
  });
}

// Contact form validation
var form = document.getElementById('contactForm');
if (form) {
  var status = document.getElementById('formStatus');
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(id, msg) {
    var input = document.getElementById(id);
    document.getElementById(id + 'Error').textContent = msg;
    input.classList.toggle('invalid', msg !== '');
    input.setAttribute('aria-invalid', msg !== '' ? 'true' : 'false');
    return msg === '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var message = form.message.value.trim();

    var okName = setError('name', name ? '' : 'Enter your name.');
    var okEmail = setError('email', !email ? 'Enter your email address.' :
      (emailPattern.test(email) ? '' : 'Enter a valid email address, like name@example.com.'));
    var okMessage = setError('message', message ? '' : 'Enter a message.');

    if (okName && okEmail && okMessage) {
      status.className = 'status ok';
      status.textContent = 'Thanks, ' + name + '. Your message was sent.';
      form.reset();
    } else {
      status.className = 'status bad';
      status.textContent = 'Your message was not sent. Fix the fields marked above.';
    }
    status.focus();
  });
}
