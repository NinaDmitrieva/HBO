import { data as movieList } from './data.js';

const burgerBTN = document.querySelector('.header__burger')
const menuList = document.querySelector('.header-menu')
const signinBTN = document.querySelector('.signin__btn')
const overlay = document.querySelector('.main');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal__btn');
const showsContainer = document.querySelector('.showsContainer');
const moviesContainer = document.querySelector('.moviesContainer');
const cartoonsContainer = document.querySelector('.cartoonsContainer');


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

const getMovieShow = (arr, type) => {
    const movieShow = arr.filter(show => show.type === type)
    return movieShow
}

const showMovieShow = (arr) => {

    arr.forEach(show => {
        const showItem = `
         <div class="movie-item">
                    <img
                      class="movie-item__img"
                      src=${show.image}
                      alt=${show.title}
                    />

                    <div class="movie-item__info">
                      <div class="movie-item__info-header flex">
                        <div class="rating-box flex">
                          <img
                            class="rating-icon"
                            src="../HBO/img/icon/starICON.png"
                          />
                          <p class="rating-text">${show.rating}</p>
                        </div>

                        <p class="movie-item__info-header__year">${show.year}</p>
                      </div>

                      <h2 class="movie-item__info-name">${show.title}</h2>
                      <p class="movie-item__info-description">${show.description}</p>
                      <div class="watch-wrapper flex">
                        <img
                          class="watch-wrapper__playIcon"
                          src="../HBO/img/icon/playICON.png"
                        />
                        <a href=${show.trailer} target="_blank" class="watch-wrapper__text"
                          >WATCH</a
                        >
                      </div>
                    </div>
                  </div>
        `
        if (show.type === 'movie') {
            moviesContainer.insertAdjacentHTML('beforeend', showItem)
        } else if (show.type === 'show') {
            showsContainer.insertAdjacentHTML('beforeend', showItem)
        } else if (show.type === 'cartoon') {
            cartoonsContainer.insertAdjacentHTML('beforeend', showItem)
        }
    });
}
showMovieShow(getMovieShow(movieList, 'movie'))
showMovieShow(getMovieShow(movieList, 'show'))
showMovieShow(getMovieShow(movieList, 'cartoon'))




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



