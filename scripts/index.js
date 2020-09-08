const popup = document.querySelector('.popup');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__button-close');
const popupForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__info_title');
const profileDescription = document.querySelector('.profile__info_subtitle');
const popupInputName = document.querySelector('.popup__input_name');
const popupInputDescription = document.querySelector('.popup__input_description');


buttonOpenPopupProfile.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', onSubmitPopupForm);


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
