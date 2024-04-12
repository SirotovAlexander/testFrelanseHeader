import IMask from 'imask';

const bacdrop = document.querySelector('.bacdrop');
const modalWindow = document.querySelector('.modalWindov');
const thanksWindow = document.querySelector('.thanksWrapper');
const modalForm = document.querySelector('.modal-form');
const nameArea = document.getElementById('name-area');
const telArea = document.getElementById('tel-area');

modalForm.addEventListener('submit', onSubmit);

IMask(telArea, {
  mask: '+380-00-000-00-00',
});

function onSubmit(e) {
  e.preventDefault();
  nameArea.value = '';
  telArea.value = '';
  telArea.classList.remove('checkeError');
  nameArea.classList.remove('checkeError');
  modalWindow.classList.add('visually-hidden');
  thanksWindow.classList.remove('visually-hidden');
  setTimeout(close, 2000);
}
function close() {
  bacdrop.classList.add('visually-hidden');
  thanksWindow.classList.add('visually-hidden');
  modalWindow.classList.remove('visually-hidden');
}
