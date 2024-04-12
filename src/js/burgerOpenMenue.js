const openButton = document.querySelector('.header__svg');
const openButtonDesktop = document.querySelector('.header__button');
const closeButton = document.querySelector('.header__svgClose');
const burgerMenue = document.querySelector('.burger-menu');

openButton.addEventListener('click', onOpen);
openButtonDesktop.addEventListener('click', onOpen);
closeButton.addEventListener('click', onClose);

function onOpen(e) {
  closeButton.classList.remove('visually-hidden');
  openButton.classList.add('visually-hidden');
  burgerMenue.classList.add('burger-menuOpen');
}
function onClose(e) {
  closeButton.classList.add('visually-hidden');
  openButton.classList.remove('visually-hidden');
  burgerMenue.classList.remove('burger-menuOpen');
}
