import { data as movieList } from './data.js';

const faqItem = document.querySelectorAll('.faq-container__item');
const links = document.querySelectorAll('.header-menu__item');
const burgerBTN = document.querySelector('.header__burger')
const menuList = document.querySelector('.header-menu')
const signinBTN = document.querySelector('.signin__btn')
const overlay = document.querySelector('.main');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal__btn');
const sliderItemImg = document.querySelector('.slider-img');
const sliderItemTitle = document.querySelector('.slider-box__logo');
const sliderList = [
  {
    backgroundImage: 'url(./img/movie1.png)',
    titleSrc: './img/movie1Logo.png'
  },
  {
    backgroundImage: 'url(./img/movie2.png)',
    titleSrc: './img/movie2logo.png'
  },
  {
    backgroundImage: 'url(./img/movie3.png)',
    titleSrc: './img/sliderLogo.png'
  },
]
const whaеScreen = () => {
  if (window.matchMedia(`(min-width: 769px)`).matches) {
    menuList.classList.remove('hide')
    signinBTN.classList.remove('hide')
  }
}

const toggleBurgerMenu = () => {
  menuList.classList.toggle('hide')
  signinBTN.classList.toggle('hide')
}

const toggleModal = () => {
  modal.classList.toggle('activ')
  overlay.classList.toggle('blur')

  if (modal.classList.contains('activ')) {
    document.addEventListener('keyup', handleEscClose);
  }
  else {
    document.removeEventListener('keyup', handleEscClose);
  }
  window.addEventListener("resize", whaеScreen());
}

const handleSignForm = () => {
  toggleBurgerMenu();
  toggleModal()
}

const handleEscClose = (e) => {
  if (e.code === 'Escape' && modal.classList.contains('activ')) {
    toggleModal()
  }
}

const getFilterTtems = (arr, type) => arr.filter((movie) => movie.type === type)

const itemTemplate = (item) => {
  return `
         <div class="movie-item">
                    <img
                      class="movie-item__img"
                      src=${item.image}
                      alt=${item.title}
                    />

                    <div class="movie-item__info">
                      <div class="movie-item__info-header flex">
                        <div class="rating-box flex">
                          <img
                            class="rating-icon"
                            src="../HBO/img/icon/starICON.png"
                          />
                          <p class="rating-text">${item.rating}</p>
                        </div>

                        <p class="movie-item__info-header__year">${item.year}</p>
                      </div>

                      <h2 class="movie-item__info-name">${item.title}</h2>
                      <p class="movie-item__info-description">${item.description}</p>
                      <div class="watch-wrapper flex">
                        <img
                          class="watch-wrapper__playIcon"
                          src="../HBO/img/icon/playICON.png"
                        />
                        <a href=${item.trailer} target="_blank" class="watch-wrapper__text"
                          >WATCH</a
                        >
                      </div>
                    </div>
                  </div>
        `
}

const showMovieShow = (arr, type) => {
  arr.forEach(item => {
    const showItem = itemTemplate(item)

    if (item.type === type) {
      const container = document.querySelector(`.${type}sContainer`)
      container.insertAdjacentHTML('beforeend', showItem)
    }
  });
}

['movie', 'show', 'cartoon'].forEach(type => {
  showMovieShow(getFilterTtems(movieList, type), type)
})


sliderList.forEach((item, i) => {
  setInterval(() => {
    sliderItemImg.style.backgroundImage = item.backgroundImage
    sliderItemTitle.src = item.titleSrc
  }, 4000 * (i + 1));
})

const handleSmoothScroll = (event) => {
  const { currentTarget } = event;
  const href = currentTarget.getAttribute('href');

  if (!href || !href.startsWith('#') || href.length < 2) return;

  event.preventDefault();

  const element = document.querySelector(href);

  if (!element) return;

  const top = element.offsetTop;
  window.scrollTo({ behavior: 'smooth', top })
};

const handelFaqItem = (e) => {
  const { currentTarget: target } = e
  target.classList.toggle('opened');
  const isOpened = target.classList.contains('opened');
  const height = target.querySelector('.answer-title').clientHeight;
  const content = target.querySelector('.faq-container__answer');

  content.style.height = `${isOpened ? height : 0}px`
  console.log(height)
}

burgerBTN.addEventListener('click', toggleBurgerMenu);
signinBTN.addEventListener('click', handleSignForm);
modalBtn.addEventListener('click', toggleModal);
links.forEach(link => link.addEventListener('click', handleSmoothScroll))
faqItem.forEach(item => item.addEventListener('click', handelFaqItem));
