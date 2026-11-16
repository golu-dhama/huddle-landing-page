const register = document.getElementById('register');
const dialog = document.getElementById('register-demo');
const form = document.getElementById('register-form');
const status = dialog.querySelector('.registration-status');

register.addEventListener('click', () => {
  form.reset();
  status.textContent = '';
  dialog.showModal();
});

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());

form.addEventListener('submit', event => {
  event.preventDefault();
  status.textContent = 'Demo complete. The form accepted your sample email.';
  form.reset();
});

register.disabled = false;
