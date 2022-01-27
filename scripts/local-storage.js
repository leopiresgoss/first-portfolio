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



window.addEventListener('load',()=>{
  const data = formData;
  const username = document.querySelector('#full-name');
  const useremail = document.querySelector('#email');
  const usermessage = document.querySelector('#message');
  console.log('+++++==+++++++++++',data);
  username.value=data['full-name'];
  useremail.value=data['email'];
  usermessage.value=data['message'];


})