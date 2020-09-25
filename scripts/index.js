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
const cardTemplate = document.querySelector('.element__template');
const imagePopup = document.querySelector('.popup__images');
const popupImage = document.querySelector('.popup__image');
const popupTitleImage = document.querySelector('.popup__title_image');
const buttonClosePopupImages = document.querySelector('.popup__button-close_image');

popupInputName.value = profileName.textContent;
popupInputDescription.value = profileDescription.textContent;

for (const initialCard of initialCards) {
  addCard(createCard(initialCard.name, initialCard.link), false);
}

function createCard(name, link) {
  const newCardElement = cardTemplate.cloneNode(true);
  const elementPhoto = newCardElement.querySelector('.element__item');

  newCardElement.classList.remove('element__template');
  newCardElement.querySelector('.element__figcation-title').textContent = name;
  elementPhoto.setAttribute('src', link);
  elementPhoto.setAttribute('alt', name);

  return newCardElement;
}

function addCard(newCardElement, start) {
  const elementPhoto = newCardElement.querySelector('.element__item');
  const elementLike = newCardElement.querySelector('.element__figcation-like');

  newCardElement.querySelector('.element__delete').addEventListener('click', () => {
    newCardElement.remove();
  });

  elementLike.addEventListener('click', function (event) {
    elementLike.classList.toggle('element__figcation-like_active');
  });

  elementPhoto.addEventListener('click', handleOpenImagePopupClick);

  function handleOpenImagePopupClick() {
    popupImage.setAttribute('src', elementPhoto.getAttribute('src'));
    popupTitleImage.textContent = elementPhoto.getAttribute('alt');
    openPopup(imagePopup);
  }

  handleClickClosePopup(imagePopup, buttonClosePopupImages);

  if (start) {
    elements.prepend(newCardElement);
  } else {
    elements.append(newCardElement);
  }
}

function openPopup(modal) {
  modal.classList.add('popup_opened');
}

function handleClickOpenPopup(modal, element) {
  function handleOpenPopup() {
    openPopup(modal);
  }

  element.addEventListener('click', handleOpenPopup);
}

function closePopup(modal) {
  modal.classList.remove('popup_opened');
}

function handleClickClosePopup(modal, element) {
  function handleClosePopup() {
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

function onSubmitPopupFormAddCard(event) {
  event.preventDefault();
  addCard(createCard(popupInputPlace.value, popupInputPlaceLink.value), true);
  closePopup(popupAddPhoto);
}

popupFormAddCard.addEventListener('submit', onSubmitPopupFormAddCard);
popupFormProfile.addEventListener('submit', onSubmitPopupForm);
