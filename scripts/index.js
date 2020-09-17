const popup = document.querySelector('.popup');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__button-close');
const popupForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__info-title');
const profileDescription = document.querySelector('.profile__info-subtitle');
const popupInputName = document.querySelector('.popup__input_name');
const popupInputDescription = document.querySelector('.popup__input_description');
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
const popupItem = document.querySelector('.popup__item');


const buttonOpenPopupItem = document.querySelector('.profile__add-button');
const elementFigcationTitle = document.querySelector('.element__figcation-title');
const elementItem = document.querySelector('.element__item');
const popupInputItem  = document.querySelector('.popup__input_item');
const popupInputLink  = document.querySelector('.popup__input_link');




function openPopupItem() {
  // popupInputItem.value = initialCards[name].textContent;
  // popupInputLink.value = initialCards[link].textContent;
  popupItem.classList.add('popup__item_opened');
}

function openPopup() {
  popupInputName.value = profileName.textContent;
  popupInputDescription.value = profileDescription.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function onSubmitPopupForm(event) {
  event.preventDefault();

  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputDescription.value;

  closePopup();
}

buttonOpenPopupProfile.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', onSubmitPopupForm);
buttonOpenPopupItem.addEventListener('click', openPopupItem);

function addItem(nameValue, linkValue) {
  const newItem = document.createElement('div');
  newItem.classList.add('element');

  const nameElement = document.createElement('h2');
  nameElement.classList.add('element__figcation-title');
  nameElement.textContent = nameValue;

  const linkElement = document.createElement('img');
  linkElement.classList.add('element__item');
  linkElement.textContent = linkValue;

  // const likeButtonElement = document.createElement('button');
  // likeButtonElement.classList.add('song__like');

  addItem.append(nameElement, linkElement, likeButtonElement);
  // songsContainer.append(trackContainer);
}

//
