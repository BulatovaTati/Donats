import Throttle from 'lodash.throttle';
const STORAGE_KEY = 'registration-form';
const CONTACT_KEY = 'contact-form';
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

initForm(STORAGE_KEY, form);

const send = document.querySelector('.contact__form');

send.addEventListener('submit', evt => {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(CONTACT_KEY);
});

send.addEventListener(
  'input',
  Throttle(evt => {
    let formData = localStorage.getItem(CONTACT_KEY);
    formData = formData ? JSON.parse(formData) : {};

    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(CONTACT_KEY, JSON.stringify(formData));
  }, 500)
);

initForm(CONTACT_KEY, send);

function initForm(key, item) {
  let parsedData = localStorage.getItem(key);

  if (parsedData) {
    parsedData = JSON.parse(parsedData);

    Object.entries(parsedData).forEach(([name, value]) => {
      item.elements[name].value = value;
    });
  }
}
