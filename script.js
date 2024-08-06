var menu = document.querySelector('.menu');
var ul = document.querySelector('nav ul');

menu.addEventListener('click', () => {
    ul.classList.toggle('desactive');
    ul.classList.toggle('active');
})

