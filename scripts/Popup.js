export default class Popup {
  constructor(popupSelector) {

    this._container = document.querySelector(popupSelector);
  }

  //Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.

  openPopup() {

  }

  closePopup() {

  }

  //Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
  _handleEscClose() {

  }


  //Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
  setEventListeners() {

  }
}
