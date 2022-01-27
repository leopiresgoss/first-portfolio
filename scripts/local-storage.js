let formData = {};

const formDataStored = localStorage.getItem('formData');
if (formDataStored) {
  formData = JSON.parse(formDataStored);
}

window.addEventListener('load', () => {
  Object.keys(formData).forEach((key) => {
    const input = document.getElementById(key);
    if (input) {
      input.value = formData[key];
    }
  });
});

// add event listener to input and change local storage
const inputs = document.querySelectorAll('form fieldset > *');

inputs.forEach((input) => {
  input.addEventListener('change', () => {
    formData[input.id] = input.value;
    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem('formData', formDataJSON);
  });
});
