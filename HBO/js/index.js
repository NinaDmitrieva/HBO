const burgerBTN = document.querySelector('.header__burger')
const menuList = document.querySelector('.header-menu')
const signinBTN = document.querySelector('.signin__btn')
const header = document.querySelector('.header ');
const overlay = document.querySelector('.main')

const toggleBurgerMenu = (e) => {
    e.preventDefault();
    menuList.classList.toggle('hide')
    signinBTN.classList.toggle('hide')
    // overlay.style.opacity = "0.4";
    // header.style.opacity = '1';
}

burgerBTN.addEventListener('click', toggleBurgerMenu)