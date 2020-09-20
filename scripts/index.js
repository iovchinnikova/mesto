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
const popupForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__info-title');
const profileDescription = document.querySelector('.profile__info-subtitle');
const popupInputName = document.querySelector('.popup__input_name');
const popupInputDescription = document.querySelector('.popup__input_description');

const popupAddPhoto = document.querySelector('.popup__photo');
const buttonOpenPopupPhoto = document.querySelector('.profile__add-button');
const closeButtonPopupPhoto = document.querySelector('.popup__button-close_photo');
const inputPhotoPlace = document.querySelector('.popup__input_place');
const inputPhotoPlaceLink = document.querySelector('.popup__input_place-link');


popupInputName.value = profileName.textContent;
popupInputDescription.value = profileDescription.textContent;

function handleClickOpenPopup(modal, element) {
function openPopup(){
  modal.classList.add('popup_opened')
}
  element.addEventListener('click', openPopup)
}

function closePopup(modal){
  modal.classList.remove('popup_opened');
}

function handleClickClosePopup(modal, element) {
  function handleClosePopup(){
    closePopup(modal);
  }
  element.addEventListener('click', handleClosePopup);
}
handleClickClosePopup(popupAddPhoto, closeButtonPopupPhoto);
handleClickClosePopup(popupProfile, buttonClosePopupProfile);
handleClickOpenPopup(popupAddPhoto, buttonOpenPopupPhoto);
handleClickOpenPopup(popupProfile, buttonOpenPopupProfile);


function onSubmitPopupForm(event) {
  event.preventDefault();

  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputDescription.value;

  closePopup(popupProfile);
}



popupForm.addEventListener('submit', onSubmitPopupForm);
// buttonOpenPopupItem.addEventListener('click', openPopupItem);

// function addItem(nameValue, linkValue) {
//   const newItem = document.createElement('div');
//   newItem.classList.add('element');
//
//   const nameElement = document.createElement('h2');
//   nameElement.classList.add('element__figcation-title');
//   nameElement.textContent = nameValue;
//
//   const linkElement = document.createElement('img');
//   linkElement.classList.add('element__item');
//   linkElement.textContent = linkValue;
//
//   // const likeButtonElement = document.createElement('button');
//   // likeButtonElement.classList.add('song__like');
//
//   addItem.append(nameElement, linkElement, likeButtonElement);
//   // songsContainer.append(trackContainer);
// }
//
// //
