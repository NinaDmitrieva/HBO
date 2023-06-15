import { data as movieList } from './data.js';

const burgerBTN = document.querySelector('.header__burger')
const menuList = document.querySelector('.header-menu')
const signinBTN = document.querySelector('.signin__btn')
const overlay = document.querySelector('.main');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal__btn');
const showsContainer = document.querySelector('.shows');
const showsTemplate = document.querySelector('#shows').content;


const toggleBurgerMenu = () => {
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
    modal.style.opacity = '1';
    document.addEventListener('keyup', handleEscClose);

}
const closeModal = () => {
    modal.style.opacity = '0';
    overlay.style.filter = 'blur(0)';
    toggleBurgerMenu()
    document.removeEventListener('keyup', handleEscClose);
}

const handleEscClose = (e) => {
    if (e.code === 'Escape') {
        closeModal()
    }
}

const getMovieShow = () => {
    const movieShow = movieList.filter(show => show.type === 'show')
    return movieShow
}


const showMovieShow = () => {
    getMovieShow().forEach(show => {
        // клонируем содержимое 
        const showElement = showsTemplate.querySelector('.movie-item').cloneNode(true);

        // наполняем содержимым
        showElement.querySelector('.movie-item__img').src = show.image;
        showElement.querySelector('.movie-item__img').alt = show.title;
        showElement.querySelector('.movie-item__info-name').textContent = show.title;
        showElement.querySelector('.rating-text').textContent = show.rating;

        showElement.querySelector('.movie-item__info-header__year').textContent = show.year;
        showElement.querySelector('.movie-item__info-description').textContent = show.description;
        showElement.querySelector('.watch-wrapper__text').href = show.trailer;
        // отображаем на странице
        showsContainer.append(showElement);
    });
}
showMovieShow()


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
signinBTN.addEventListener('click', handleSign);
modalBtn.addEventListener('click', closeModal)



