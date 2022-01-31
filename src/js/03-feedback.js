import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('.feedback-form input');
const textareaRef = document.querySelector('.feedback-form textarea');

const DATA_STORAGE = 'feedback-form-state';

populateForm();

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

const formData = {};

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(DATA_STORAGE, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  console.log(formData);

  evt.preventDefault();

  evt.currentTarget.reset();

  localStorage.removeItem(DATA_STORAGE);
}

function populateForm() {
  const data = JSON.parse(localStorage.getItem(DATA_STORAGE));

  if (data) {
    inputRef.value = data.email;
    textareaRef.value = data.message;
  }
}
