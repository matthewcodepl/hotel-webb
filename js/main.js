const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation__list');

const handleClick = () => {
    nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);