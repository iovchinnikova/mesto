const popup = document.querySelector('.popup');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__button-close')
const popupSaveProfileButton = document.querySelector('.popup__button-save')

function openPopup(){
  popup.classList.toggle('popup_opened');
}


buttonOpenPopupProfile.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', openPopup)

function formSubmitHandler (event){
  event.preventDefault();

  console.log('formSaveHandler')

  let profileName = document.querySelector('.profile__title');
  let profileDescription = document.querySelector('.profile__subtitle');
  let popupInputName = document.querySelector('.popup__input_name');
  let popupInputDescription = document.querySelector('.popup__input_description');

  popupInputName.value = profileName.textContent;
  popupInputDescription.value = profileDescription.textContent

}

popupSaveProfileButton.addEventListener('submit', formSubmitHandler)
