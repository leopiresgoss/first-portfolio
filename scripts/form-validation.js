function validateEmail(email) {
  // check if email was written only using lowercase char
  const emailRegex = /^([a-z0-9_-]+)@([a-z0-9_-]+).((([a-z]){3})|((([a-z]){3}).(([a-z]){1,3})))$/;

  return emailRegex.test(email);
}

const contactForm = document.forms[0];

contactForm.addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  const checkEmail = validateEmail(email);
  if (!checkEmail) {
    const errorMsg = document.querySelector('.error-msg');
    errorMsg.innerHTML = "Please enter your email addres in this format: 'example@example.com'";
    errorMsg.style.display = 'block';
    event.preventDefault();
  }
});
