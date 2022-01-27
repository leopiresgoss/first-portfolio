// form validation 
function validateEmail(form) {
  // check if email is written properly '_replyto'
  const email = form.elements['_replyto'].value
  
  //  to check if email was written only using lowercase char
  const emailRegex = /^([a-z0-9_-]+)@([a-z0-9_-]+).((([a-z]){3})|((([a-z]){3}).(([a-z]){1,3})))$/
  
  return emailRegex.test(email)
}

// get the form => add Event listner to submit
const contactForm = document.forms[0];
console.log(contactForm);

contactForm.addEventListener('submit', (event) => {
  const checkEmail = validateEmail(contactForm);
  if(!checkEmail){
    
    const errormsg = document.querySelector('.error-msg');
    console.log(errormsg);
    errormsg.style.display = 'block';
  }
  event.preventDefault()
});
/* ---------------------- */






