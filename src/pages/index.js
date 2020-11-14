import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

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

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
const newPopupProfile = new PopupWithForm('.popup__profile', onSubmitPopupForm);
const newPopupAddPhoto = new PopupWithForm('.popup__photo', onSubmitPopupFormAddCard);
const newImagePopup = new PopupWithImage('.popup__images');

const cardsList = new Section({
    items: initialCards,
    renderer: renderItem,
  },
  '.elements'
);
cardsList.renderItems();

function renderItem(item) {
  // Создадим экземпляр карточки
  const card = new Card(item, '.element__template', handleOpenImagePopupClick);
  // Создаём карточку и возвращаем наружу
  return card.generateCard();
}

const popupProfile = document.querySelector('.popup__profile')
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const popupInputName = document.querySelector('.popup__input_name');
const popupInputDescription = document.querySelector('.popup__input_description');
const popupAddPhoto = document.querySelector('.popup__photo');
const buttonOpenPopupPhoto = document.querySelector('.profile__add-button');

const userInfo = new UserInfo({
  selectorName: '.profile__info-title',
  selectorInfo: '.profile__info-subtitle'
});
const formClassConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
};
const validatorOfPopupAddPhoto = new FormValidator(formClassConfig, popupAddPhoto);
const validatorOfPopupProfile = new FormValidator(formClassConfig, popupProfile);


validatorOfPopupAddPhoto.enableValidation();
validatorOfPopupProfile.enableValidation();

function handleOpenImagePopupClick(link, name) {
  newImagePopup.open(link, name);
}

newPopupAddPhoto.setEventListeners();
newPopupProfile.setEventListeners();
newImagePopup.setEventListeners();

buttonOpenPopupPhoto.addEventListener('click', () => {
  validatorOfPopupAddPhoto.reset();
  newPopupAddPhoto.open();
});

buttonOpenPopupProfile.addEventListener('click', () => {
  const currentUserInfo = userInfo.getUserInfo();
  popupInputName.value = currentUserInfo.name;
  popupInputDescription.value = currentUserInfo.info;
  validatorOfPopupProfile.reset();
  newPopupProfile.open();
});


function onSubmitPopupForm(inputValues) {
  userInfo.setUserInfo({
    name: inputValues.Name,
    info: inputValues.Description
  });
}

function onSubmitPopupFormAddCard(inputValues) {
  // Создадим экземпляр карточки
  cardsList.addItem(renderItem({
    name: inputValues.Name,
    link: inputValues.Link
  }));
}
