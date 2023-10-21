const mainNavigation = document.querySelector('.mainNav');
const toggle = document.querySelector('.toggleButton');

toggle.addEventListener('click', function () {
    mainNavigation.classList.toggle('showNav');
    toggle.classList.toggle('fa-xmark');
    toggle.classList.toggle('fa-bars');
})