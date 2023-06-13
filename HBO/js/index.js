const burgerBTN = document.querySelector('.header__burger')
const menuList = document.querySelector('.header-menu')
const signinBTN = document.querySelector('.signin__btn')
const header = document.querySelector('.header ');
const overlay = document.querySelector('.main');
const modal = document.querySelector('.modal')


const toggleBurgerMenu = (e) => {
    e.preventDefault();
    menuList.classList.toggle('hide')
    signinBTN.classList.toggle('hide')
}

const closeBurgerMenu = () => {
    menuList.classList.add('hide')
    signinBTN.classList.add('hide')
}

const handleSign = () => {
    closeBurgerMenu();
    openModal()
    overlay.style.filter = 'blur(4px)';
}

const openModal = () => {
    modal.style.opacity= '1';
}
const closeModal = () => {
    modal.style.opacity = '0';
    overlay.style.filter = 'blur(0)';

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

overlay.addEventListener('click', closeModal)
burgerBTN.addEventListener('click', toggleBurgerMenu);
signinBTN.addEventListener('click', handleSign)