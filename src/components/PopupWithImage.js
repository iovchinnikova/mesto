import Popup from "./Popup.js";

//наследует от Popup.
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupImage = document.querySelector('.popup__image');
    this._popupTitleImage = document.querySelector('.popup__title_image');
  }

  // В методе open класса PopupWithImage нужно вставлять
  // в попап картинку и атрибут src изображения и подпись к картинке.
  open(link, name) {
    this._popupImage.setAttribute('src', link);
    this._popupTitleImage.textContent = name;

    super.open();
  }
}
