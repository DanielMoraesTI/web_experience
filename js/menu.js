const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.barra');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});