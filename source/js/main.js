/* Map selector */
const mapSelector = document.querySelector('.map__item-placeholder');
const mapList = document.querySelector('.map__list');
const mapItems = document.querySelectorAll('.map__list .map__item input');
const mapCards = document.querySelectorAll('.map__cards-item');

mapSelector.addEventListener('click', mapSelectorHandler);

function mapSelectorHandler () {
  mapList.classList.toggle('map__list--active');

  mapItems.forEach((item) => {
    item.addEventListener('change', mapItemsHandler);
  })
}

function mapItemsHandler (evt) {

  if (evt.target.value == 'Жигулевск') {
    clearActiveCards();
    mapSelector.textContent = evt.target.value;
    mapCards[0].classList.add('map__cards-item--active');
    mapCards[0].scrollIntoView();
  } else if (evt.target.value == 'Нефтегорск') {
    clearActiveCards();
    mapSelector.textContent = evt.target.value;
    mapCards[1].classList.add('map__cards-item--active');
    mapCards[1].scrollIntoView();
  } else if (evt.target.value == 'Новокуйбышевск') {
    clearActiveCards();
    mapSelector.textContent = evt.target.value;
    mapCards[2].classList.add('map__cards-item--active');
    mapCards[2].scrollIntoView();
  }

  if (mapList.classList.contains('map__list--active')) {
    mapList.classList.remove('map__list--active');
  }
}

function clearActiveCards () {
  mapCards.forEach((item) => {
    if (item.classList.contains('map__cards-item--active')) {
      item.classList.remove('map__cards-item--active');
    }
  })
}

/* Column & nav link */
const columnLink = document.querySelector('.header__column-link');

columnLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapSelectorHandler();
  mapList.scrollIntoView();
})

const footerLink = document.querySelector('.footer__nav-link');

footerLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapSelectorHandler();
  mapList.scrollIntoView();
})

const headerLink = document.querySelector('.header__mobile-nav-item--active');

headerLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapSelectorHandler();
  mapList.scrollIntoView();
})