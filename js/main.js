"use strict";

/* Map selector */
var mapSelector = document.querySelector('.map__item-placeholder');
var mapList = document.querySelector('.map__list');
var mapItems = document.querySelectorAll('.map__list .map__item input');
var mapCards = document.querySelectorAll('.map__cards-item');
mapSelector.addEventListener('click', mapSelectorHandler);

function mapSelectorHandler() {
  mapList.classList.toggle('map__list--active');
  mapItems.forEach(function (item) {
    item.addEventListener('change', mapItemsHandler);
  });
}

function mapItemsHandler(evt) {
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

function clearActiveCards() {
  mapCards.forEach(function (item) {
    if (item.classList.contains('map__cards-item--active')) {
      item.classList.remove('map__cards-item--active');
    }
  });
}
/* Column & nav link */


var columnLink = document.querySelector('.header__column-link');
columnLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapSelectorHandler();
  mapList.scrollIntoView();
});
var footerLink = document.querySelector('.footer__nav-link');
footerLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapSelectorHandler();
  mapList.scrollIntoView();
});
var headerLink = document.querySelector('.header__mobile-nav-item--active');
headerLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapSelectorHandler();
  mapList.scrollIntoView();
});