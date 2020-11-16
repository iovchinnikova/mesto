import PopupWithForm from "./PopupWithForm.js";

export default class PopupConfirmDeleteCard extends PopupWithForm {
  constructor(popupSelector) {
    super(popupSelector, () => {
    }, 'Удаление...');
  }

  open(onFormSubmit) {
    this._onFormSubmit = onFormSubmit;
    super.open();
  }
}
