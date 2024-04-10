const cookiesInfoBox = document.querySelector('.cookies__popup');
const cookiesButtonAccept = document.querySelector('.cookies__button');

console.dir(cookiesInfoBox);
console.dir(cookiesButtonAccept);

function showAccept() {
  cookiesInfoBox.classList.remove('visually-hidden');
}

setTimeout(showAccept, 2000);

cookiesButtonAccept.addEventListener('click', onClick);

function onClick(e) {
  cookiesInfoBox.classList.add('visually-hidden');
}
