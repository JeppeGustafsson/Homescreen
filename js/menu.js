//Menu elements
const menuEl = document.getElementById('main-menu');
const btnEl = menuEl.querySelector('.burger-btn');
const hiddenMenuEl = menuEl.querySelector('.burger-menu');

//Toggle active class to show/hide side menu
function toggleActive() {
    menuEl.classList.toggle('active');
}

btnEl.addEventListener('click', toggleActive);