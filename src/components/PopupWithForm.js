//наследует от Popup. Этот класс:
// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
// Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
// Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.

import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  // Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
  constructor(popupSelector, onFormSubmit) {
    super(popupSelector);
    this._onFormSubmit = onFormSubmit;
    this._form = this._modal.querySelector('form');
  }

  // Содержит приватный метод _getInputValues,
  // который собирает данные всех полей формы.
  _getInputValues() {
    let object = {};
    let formData =  new FormData(this._form);
    formData.forEach((value, key) => {object[key] = value});
    return object;
  }

  // Перезаписывает родительский метод setEventListeners.
  // Метод setEventListeners класса PopupWithForm должен
  // не только добавлять обработчик клика иконке закрытия,
  // но и добавлять обработчик сабмита формы.
  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (event) => {
      event.preventDefault();

      this._onFormSubmit(this._getInputValues());
      this.close();
    });
  }

  // Перезаписывает родительский метод close, так как
  // при закрытии попапа форма должна ещё и сбрасываться.
  close() {
    this._form.reset();

    super.close();
  }
}
