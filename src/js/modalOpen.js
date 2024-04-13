const modalOpen = document.querySelector('.header__connection');
const modalWindow = document.querySelector('.bacdrop');
const modalClose = document.querySelector('.modalWindov__svg');
const openButtonDesktop = document.querySelector('.header__button');

modalOpen.addEventListener('click', openFunction);
openButtonDesktop.addEventListener('click', openFunction);
modalClose.addEventListener('click', closeFunction);

function openFunction(e) {
  modalWindow.classList.remove('visually-hidden');
}
function closeFunction(e) {
  modalWindow.classList.add('visually-hidden');
}
