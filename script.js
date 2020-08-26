const button = document.querySelector('.menu-toggle');
const menu = document.querySelector('.dropdown-menu');

button.addEventListener('click', function() {
    menu.classList.toggle('dropdown-menu-show');
});

