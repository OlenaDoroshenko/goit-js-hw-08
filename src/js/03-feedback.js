import { throttle, debounce } from 'lodash';

const form = document.querySelector('.feedback-form');
console.log(form);

form.addEventListener('input', throttle(saveData, 10000));
form.addEventListener('submit', submitForm);

const addStorage = function (data) {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

function saveData(e) {
  const currentData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  /*   
  const {
    elements: { email, message },
  } = e.currentTarget;
  const currentData = {
    email: email.value,
    message: message.value,
  };*/
  addStorage(currentData);
}

window.onload = function () {
  if (localStorage.getItem('feedback-form-state')) {
    const dataFromStorage = localStorage.getItem('feedback-form-state');
    const parsedDataFromStorage = JSON.parse(dataFromStorage);
    const { email, message } = parsedDataFromStorage;
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
};

function submitForm(e) {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');

  form.reset();

  console.log({
    email: form.elements.email.value,
    message: form.elements.message.value,
  });
}
