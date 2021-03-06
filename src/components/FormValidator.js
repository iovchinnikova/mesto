export default class FormValidator {
  // принимает в конструктор объект настроек с селекторами и классами формы;
  // принимает вторым параметром элемент той формы, которая валидируется;
  // объект настроек с селекторами и классами формы
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;

    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));//создается массив элементов полей методом Array.from
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);//в формах найти кнопки
  }

  // проверяют валидность поля
  _checkValidityForm(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); // находим элемент ошибки
    inputElement.classList.remove(this._config.inputErrorClass); // удаляем класс с ошибкой
    errorElement.textContent = '';
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);//в формах находим нужный инпут в котором ошибка
    inputElement.classList.add(this._config.inputErrorClass);//инпуту добавляем класс с ошибкой подчеркивает нижнюю границу
    errorElement.textContent = inputElement.validationMessage;//текстовое содержимое ошибки присваивает содержание из errorMessage (это чтото по умолчанию есть в JS я так поняла
    errorElement.classList.add(this._config.errorClass);// ошибка также присваивает класс для стилизации текстовой части ошибки
  }


  // изменяют состояние кнопки сабмита
  _changeStateSubmitButton() {
    if (this._hasInvalidInput()) {//ecли инпут ввлидный
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'disabled');//присоединит атрибут дисаблед
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled', 'disabled');//иначе удалит атрибут дисаблед
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {//вернет валидное поле true
      return !inputElement.validity.valid;//поле невалидное
    });
  }

  // устанавливают все обработчики
  _setEventListeners() {
    this._changeStateSubmitButton();//состояние кнопки при включении
    this._inputList.forEach((inputElement) => {//в массиве popupInputList методом forEach перебираем элементы
      inputElement.addEventListener('input', () => {// элементам добавить обработчик на введение данных input
        this._checkValidityForm(inputElement);//и вызывать функцию проверки валидности полей
        this._changeStateSubmitButton();//вызывать функцию проверки состояния кнопки сабмит
      });
    });
  }

  // публичный метод, который включает валидацию формы
  enableValidation() {
    this._setEventListeners();//для форм вызываем setEventListeners... ВСЕ!!!! СДАЮСЬ!!!!
  }

  reset() {
    this._changeStateSubmitButton();//вызывать функцию проверки состояния кнопки сабмит
  }
}
