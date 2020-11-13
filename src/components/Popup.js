export default class Popup {
  constructor(popupSelector) {
    this._modal = document.querySelector(popupSelector);
    this._listener = (event) => {
      this._handleEscClose(event);
    };
  }

  // Содержит приватный метод _handleEscClose,
  // который содержит логику закрытия попапа клавишей Esc.
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  // Содержит публичные методы open и close,
  // которые отвечают за открытие и закрытие попапа.
  open() {
    this._modal.classList.add('popup_opened');
    window.addEventListener('keydown', this._listener);
  }

  close() {
    this._modal.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._listener);
  }

  // Содержит публичный метод setEventListeners,
  // который добавляет слушатель клика иконке закрытия попапа.
  setEventListeners() {
    this._modal.querySelector('.popup__button-close').addEventListener('click', () => {
      this.close();
    });

    this._modal.addEventListener('mousedown', (event) => {
      if (event.target === event.currentTarget) {
        this.close();
      }
    });
  }
}
