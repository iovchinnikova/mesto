const popup = document.querySelector('.popup');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__button-close');
const popupForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__info-title');
const profileDescription = document.querySelector('.profile__info-subtitle');
const popupInputName = document.querySelector('.popup__input_name');
const popupInputDescription = document.querySelector('.popup__input_description');

// const buttonOpenPopupItem = document.querySelector('.profile__add-button');
// const popupInputItem = document.querySelector('.popup__input_item');
// const popupInputLink = document.querySelector('.popup__input_link');
// const buttonOpenPopupItem = document.querySelector('.profile__add-button');
//
//
// function openPopupItem() {
//   popupInputItem.value = initialCards[name].textContent;
//   popupInputLink.value = initialCards[link].textContent;
//   popup.classList.add('popup_opened');
// }

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
// buttonOpenPopupItem.addEventListener('click', openPopupItem);

function addSong(artistValue, titleValue) {
  const trackContainer = document.createElement('div');
  trackContainer.classList.add('song');

  const artistElement = document.createElement('h4');
  artistElement.classList.add('song__artist');
  artistElement.textContent = artistValue;

  const titleElement = document.createElement('h4');
  titleElement.classList.add('song__title');
  titleElement.textContent = titleValue;

  const likeButtonElement = document.createElement('button');
  likeButtonElement.classList.add('song__like');

  trackContainer.append(artistElement, titleElement, likeButtonElement);
  songsContainer.append(trackContainer);
}

// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];
