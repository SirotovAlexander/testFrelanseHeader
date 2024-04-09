const langUA = document.querySelector('.burger-menu__langUA');
const langRU = document.querySelector('.burger-menu__langRU');

langUA.addEventListener('click', selectUA);
langRU.addEventListener('click', selectRU);

function selectUA(e) {
  if (langRU.classList.contains('languageselected')) {
    langRU.classList.remove('languageselected');
    langUA.classList.add('languageselected');
  }
}
function selectRU(e) {
  if (langUA.classList.contains('languageselected')) {
    langUA.classList.remove('languageselected');
    langRU.classList.add('languageselected');
  }
}
