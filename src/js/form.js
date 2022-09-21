import Throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.registration__form');

form.addEventListener('submit', evt => {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

form.addEventListener(
  'input',
  Throttle(evt => {
    let formData = localStorage.getItem(STORAGE_KEY);
    formData = formData ? JSON.parse(formData) : {};

    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

(function initForm() {
  let parsedData = localStorage.getItem(STORAGE_KEY);

  if (parsedData) {
    parsedData = JSON.parse(parsedData);

    Object.entries(parsedData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
})();

const send = document.querySelector('.contact__form');

send.addEventListener('submit', evt => {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

send.addEventListener(
  'input',
  Throttle(evt => {
    let formData = localStorage.getItem(STORAGE_KEY);
    formData = formData ? JSON.parse(formData) : {};

    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);
