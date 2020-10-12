import Card from './Card.js';
import FormValidator from './FormValidator.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const popupProfile = document.querySelector('.popup__profile')
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonClosePopupProfile = document.querySelector('.popup__button-close_profile');
const popupFormProfile = document.querySelector('.popup__form_profile');
const profileName = document.querySelector('.profile__info-title');
const profileDescription = document.querySelector('.profile__info-subtitle');
const popupInputName = document.querySelector('.popup__input_name');
const popupInputDescription = document.querySelector('.popup__input_description');
const popupAddPhoto = document.querySelector('.popup__photo');
const buttonOpenPopupPhoto = document.querySelector('.profile__add-button');
const closeButtonPopupPhoto = document.querySelector('.popup__button-close_photo');
const popupFormAddCard = document.querySelector('.popup__form_add_card');
const popupInputPlace = document.querySelector('.popup__input_place');
const popupInputPlaceLink = document.querySelector('.popup__input_place-link');
const elements = document.querySelector('.elements');
const imagePopup = document.querySelector('.popup__images');
const popupImage = document.querySelector('.popup__image');
const popupTitleImage = document.querySelector('.popup__title_image');
const buttonClosePopupImages = document.querySelector('.popup__button-close_image');

popupInputName.value = profileName.textContent;
popupInputDescription.value = profileDescription.textContent;
Card.openPopup = handleOpenImagePopupClick;

//Теперь цикл обойдёт массив messageList и для каждого его элемента:
// создаст новый экземпляр класса Card,
// подготовит карточку к публикации,
//добавит новую карточку в DOM.


initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item, '.element__template');
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();
  elements.append(cardElement);
});

let openModal;

function handleOpenImagePopupClick(link, name) {
  popupImage.setAttribute('src', link);
  popupTitleImage.textContent = name;
  openPopup(imagePopup);
}


function openPopup(modal) {
  openModal = modal;
  modal.classList.add('popup_opened');
  window.addEventListener('keydown', closePopupHandleEscape);
}

function handleClickOpenPopup(modal, element) {
  function handleOpenPopup() {
    openPopup(modal);
  }

  element.addEventListener('click', handleOpenPopup);
}

function closePopup(modal) {
  modal.classList.remove('popup_opened');
  window.removeEventListener('keydown', closePopupHandleEscape);
}

function handleClickClosePopup(modal, element) {
  function handleClosePopup() {
    closePopup(modal);
  }

  element.addEventListener('click', handleClosePopup);
}

const popupList = document.querySelectorAll('.popup');

function closePopupOnclickOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.currentTarget)
  }
}

popupList.forEach((popup) => {
  popup.addEventListener('mousedown', closePopupOnclickOverlay);
})


function closePopupHandleEscape(event) {
  if (event.key === 'Escape') {
    closePopup(openModal)
  }
}

handleClickClosePopup(popupAddPhoto, closeButtonPopupPhoto);
handleClickClosePopup(popupProfile, buttonClosePopupProfile);
handleClickClosePopup(imagePopup, buttonClosePopupImages);
handleClickOpenPopup(popupAddPhoto, buttonOpenPopupPhoto);
handleClickOpenPopup(popupProfile, buttonOpenPopupProfile);

function onSubmitPopupForm(event) {
  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputDescription.value;
  closePopup(popupProfile);
}

function onSubmitPopupFormAddCard(event) {
  event.preventDefault();
  // Создадим экземпляр карточки
  const card = new Card({
    name: popupInputPlace.value,
    link: popupInputPlaceLink.value
  }, '.element__template');
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
  closePopup(popupAddPhoto);
}

popupFormAddCard.addEventListener('submit', onSubmitPopupFormAddCard);
popupFormProfile.addEventListener('submit', onSubmitPopupForm);

const validatorOfPopupAddPhoto = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
}, popupAddPhoto);
validatorOfPopupAddPhoto.enableValidation();
const validatorOfPopupProfile = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
}, popupProfile);
validatorOfPopupProfile.enableValidation();
