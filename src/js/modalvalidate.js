const modalWindow = document.querySelector('.bacdrop');
const modalForm = document.querySelector('.modal-form');
const nameArea = document.getElementById('name-area');
const telArea = document.getElementById('tel-area');
const submiteButton = document.querySelector('.modal__submit');

modalForm.addEventListener('submit', onSubmit);
console.dir(nameArea);
console.dir(telArea);

function onSubmit(e) {
  e.preventDefault();
  if (nameArea.value === '' && telArea.value === '') {
    nameArea.classList.add('checkeError');
    telArea.classList.add('checkeError');
  } else if (nameArea.value === '' && telArea.value !== '') {
    nameArea.classList.add('checkeError');
  } else if (nameArea.value !== '' && telArea.value === '') {
    telArea.classList.add('checkeError');
  } else {
    nameArea.value = '';
    telArea.value = '';
    telArea.classList.remove('checkeError');
    nameArea.classList.remove('checkeError');
    modalWindow.classList.add('visually-hidden');
  }
}
