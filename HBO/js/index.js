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
function get_scroll(a) { //что по скроллу
    var d = document,
        b = d.body,
        e = d.documentElement,
        c = "client" + a;
    a = "scroll" + a;
    return /CSS/.test(d.compatMode) ? (e[c] < e[a]) : (b[c] < b[a])
};
console.log(get_scroll('Width'))

burgerBTN.addEventListener('click', toggleBurgerMenu)