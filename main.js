const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu_list');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
