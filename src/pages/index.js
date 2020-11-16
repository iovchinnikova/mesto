import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupConfirmDeleteCard from "../components/PopupConfirmDeleteCard.js";

const formClassConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
};
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-17',
  headers: {
    authorization: '3fbfd607-88cf-472b-859d-216e0633cd4f',
    'Content-Type': 'application/json'
  }
});

const confirmDeletePopup = new PopupConfirmDeleteCard('.popup__confirm');
confirmDeletePopup.setEventListeners();

function handleSuccessInitialCards(initialCards, user) {
  const cardsList = new Section({
      items: initialCards,
      renderer: renderItem,
    },
    '.elements'
  );
  // Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
  const newPopupAddPhoto = new PopupWithForm('.popup__photo', onSubmitPopupFormAddCard, 'Добавление...');
  const newImagePopup = new PopupWithImage('.popup__images');
  const popupAddPhoto = document.querySelector('.popup__photo');
  const buttonOpenPopupPhoto = document.querySelector('.profile__add-button');
  const validatorOfPopupAddPhoto = new FormValidator(formClassConfig, popupAddPhoto);

  function renderItem(item) {
    // Создадим экземпляр карточки
    const card = new Card(item, '.element__template', handleOpenImagePopupClick, user._id, (cardId) => {
      return api.deletingACard(cardId);
    }, (cardId) => {
      return api.removingTheLike(cardId);
    }, (cardId) => {
      return api.likeSetting(cardId);
    }, confirmDeletePopup);
    // Создаём карточку и возвращаем наружу
    return card.generateCard();
  }

  function handleOpenImagePopupClick(link, name) {
    newImagePopup.open(link, name);
  }

  function onSubmitPopupFormAddCard(inputValues, onServerSuccess) {
    api.addingANewCard(inputValues).then((result) => {
      // Создадим экземпляр карточки
      cardsList.addItem(renderItem(result));
      onServerSuccess();
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  cardsList.renderItems();
  validatorOfPopupAddPhoto.enableValidation();
  newPopupAddPhoto.setEventListeners();
  newImagePopup.setEventListeners();
  buttonOpenPopupPhoto.addEventListener('click', () => {
    validatorOfPopupAddPhoto.reset();
    newPopupAddPhoto.open();
  });
}

function handleSuccessLoadingUserInformationFromTheServer(user) {
  const newPopupProfile = new PopupWithForm('.popup__profile', onSubmitPopupForm, 'Сохранение...');
  const newPopupAvatar = new PopupWithForm('.popup__avatar', onSubmitPopupAvatar, 'Сохранение...');
  const buttonAvatar = document.querySelector('.profile__avatar');
  const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
  const popupInputName = document.querySelector('.popup__input_name');
  const popupInputDescription = document.querySelector('.popup__input_description');
  const userInfo = new UserInfo({
    selectorName: '.profile__info-title',
    selectorInfo: '.profile__info-subtitle',
    selectorAvatar: '.profile__avatar'
  });
  const popupProfile = document.querySelector('.popup__profile')
  const popupAvatar = document.querySelector('.popup__avatar')
  const validatorOfPopupProfile = new FormValidator(formClassConfig, popupProfile);
  const validatorOfPopupAvatar = new FormValidator(formClassConfig, popupAvatar);

  function onSubmitPopupForm(inputValues, onServerSuccess) {
    api.profileEditing({
      name: inputValues.Name,
      about: inputValues.Description
    }).then((result) => {
      userInfo.setUserInfo(result);
      onServerSuccess();
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  function onSubmitPopupAvatar(inputValues, onServerSuccess) {
    api.updatingUserAvatar(inputValues.avatar).then((result) => {
      userInfo.setAvatar(result.avatar);
      onServerSuccess();
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }


  userInfo.setUserInfo(user);
  userInfo.setAvatar(user.avatar);
  newPopupProfile.setEventListeners();
  newPopupAvatar.setEventListeners();
  validatorOfPopupProfile.enableValidation();
  validatorOfPopupAvatar.enableValidation();
  buttonOpenPopupProfile.addEventListener('click', () => {
    const currentUserInfo = userInfo.getUserInfo();
    popupInputName.value = currentUserInfo.name;
    popupInputDescription.value = currentUserInfo.about;
    validatorOfPopupProfile.reset();
    newPopupProfile.open();
  });

  buttonAvatar.addEventListener('click', () => {
    newPopupAvatar.open();
  });
}

api.loadingUserInformationFromTheServer()
  .then((user) => {
    handleSuccessLoadingUserInformationFromTheServer(user);

    api.getInitialCards()
      .then((initialCards) => {
        handleSuccessInitialCards(initialCards, user);
        // обрабатываем результат
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });

    // обрабатываем результат
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
