// form validation 

// get the form => add Event listner to submit

const contactForm = document.forms[0];

function validate(form) {
  let errorMessages = []
  let error = {
    inputType: '',
    message: ''
  }
  // check if input 'name' has maxlength = 30
  let name = form.elements['name'].value 

  if(!name) {
    error.inputType = form.elements['name']
    error.message = 'Please, add your full name'
    errorMessages.push(error)
  } else if (name.length > 30) {
    error.inputType = form.elements['name']
    error.message = 'Please, your name should have 30 characters at maximum'
    errorMessages.push(error)
  }

  // check if email is written properly '_replyto' and lowercase
  // use regExp to validate it
  
  // text area max length < 300 char  'message'
  
  return errorMessages
}

contactForm.addEventListener('submit', (event) => {
  let errorMessages = validate(contactForm)
  
  if (errorMessages) {
    // TODO => DISPLAY MESSAGES
    // preventDefault
  } else {
    // TODO => APPROVE THE FORM
  }

  event.preventDefault()
});






