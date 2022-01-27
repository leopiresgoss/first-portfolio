// create JS object
let formData = {};

// check if there is localstorage
// add localstorage to formData obj
// load page with formData obj
const formDataStored = localStorage.getItem('formData');
if (formDataStored) {
  formData = JSON.parse(formDataStored);
}

// add event listener to input and change local storage
const inputs = document.querySelectorAll('form fieldset > *');
inputs.forEach((input) => {
  input.addEventListener('change', () => {
    formData[input.id] = input.value;
    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem('formData', formDataJSON);
  });
});
