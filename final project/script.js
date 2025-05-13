document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    document.getElementById('formStatus').textContent = 'Thank you for reaching out, ' + name + '!';
  } else {
    document.getElementById('formStatus').textContent = 'Please fill in all fields.';
  }
});
