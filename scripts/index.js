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
// const elementLike = document.querySelector('.element__figcation-like');

const popupImage = document.querySelector('.popup__images');
console.log('ghdtn');
const buttonOpenPopupImage = document.querySelector('.element__item');
console.log('привет');
const buttonClosePopupImage = document.querySelector('.popup__button-close_image');


popupInputName.value = profileName.textContent;
popupInputDescription.value = profileDescription.textContent;

for (const initialCard of initialCards) {
  addCard(initialCard.name, initialCard.link,  false);
}


function addCard(name, link, v_nachalo) {
  const newCardElement = cardTemplate.cloneNode(true);
  const element__item = newCardElement.querySelector('.element__item');


  newCardElement.classList.remove('element__template');
  newCardElement.querySelector('.element__figcation-title').textContent = name;
  element__item.setAttribute('src', link);
  element__item.setAttribute('alt', name);
  newCardElement.querySelector('.element__figcation-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('.element__figcation-like_active');
  });

  newCardElement.querySelector('.element__delete').addEventListener('click', () => {
    newCardElement.remove();
  })

  if (v_nachalo) {
    elements.prepend(newCardElement);
  } else {
    elements.append(newCardElement);
  }
}

function handleClickOpenPopup(modal, element) {
  function openPopup() {
    modal.classList.add('popup_opened');
  }

  element.addEventListener('click', openPopup)
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
handleClickClosePopup(popupImage, buttonClosePopupImage);
handleClickOpenPopup(popupAddPhoto, buttonOpenPopupPhoto);
handleClickOpenPopup(popupProfile, buttonOpenPopupProfile);
handleClickOpenPopup(popupImage, buttonOpenPopupImage);


function onSubmitPopupForm(event) {
  event.preventDefault();

  profileName.textContent = popupInputName.value;
  profileDescription.textContent = popupInputDescription.value;

  closePopup(popupProfile);
}


popupFormProfile.addEventListener('submit', onSubmitPopupForm);

function onSubmitPopupFormAddCard(event) {
  event.preventDefault();

  addCard(popupInputPlace.value, popupInputPlaceLink.value, true);

  closePopup(popupAddPhoto);
}


popupFormAddCard.addEventListener('submit', onSubmitPopupFormAddCard);



