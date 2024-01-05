import throttle from 'lodash.throttle';

/**
 * @type {HTMLFormElement} form
 */
const form = document.querySelector('form.feedback-form');
/** @type {{email: HTMLInputElement, message: HTMLTextAreaElement}} */
const { email, message } = form.elements;
const key = 'feedback-form-state';
const formData = localStorage.getItem(key);
/** @param {Event} _e */
const saveForm = _e => {
  localStorage.setItem(
    key,
    JSON.stringify({
      email: email.value,
      message: message.value,
    })
  );
};

if (formData != null) {
  const parsedFormData = JSON.parse(formData);
  for (const key in parsedFormData) {
    form[key].value = parsedFormData[key];
  } /* 
  Object.entries(JSON.parse(formData)).forEach(([name, value]) => {
    form[name].value = value;
  }); */
}
email.addEventListener('input', throttle(saveForm, 500, { leading: false }));
message.addEventListener('input', throttle(saveForm, 500, { leading: false }));

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(key)));
  localStorage.removeItem(key);
  form.reset();
});
