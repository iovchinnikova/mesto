export default class FormValidator {
  // принимает в конструктор объект настроек с селекторами и классами формы;
  // принимает вторым параметром элемент той формы, которая валидируется;
  // объект настроек с селекторами и классами формы
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  // проверяют валидность поля
  _checkValidityForm(inputElement) {

    if (inputElement.validity.valid) {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); // находим элемент ошибки
      inputElement.classList.remove(this._config.inputErrorClass); // удаляем класс с ошибкой
      errorElement.classList.remove(this._config.errorClass);
      errorElement.textContent = '';
    } else {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);//в формах находим нужный инпут в котором ошибка
      inputElement.classList.add(this._config.inputErrorClass);//инпуту добавляем класс с ошибкой подчеркивает нижнюю границу
      errorElement.textContent = inputElement.validationMessage;//текстовое содержимое ошибки присваивает содержание из errorMessage (это чтото по умолчанию есть в JS я так поняла
      errorElement.classList.add(this._config.errorClass);// ошибка также присваивает класс для стилизации текстовой части ошибки
    }
  }


  // изменяют состояние кнопки сабмита
  _changeStateSubmitButton(popupInputList, buttonElement) {
    const hasInvalidInput = popupInputList.some((inputElement) => {//вернет валидное поле true
      return !inputElement.validity.valid;//поле невалидное
    });

    if (hasInvalidInput) {//ecли инпут ввлидный
      buttonElement.classList.add(this._config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');//присоединит атрибут дисаблед
    } else {
      buttonElement.classList.remove(this._config.inactiveButtonClass);
      buttonElement.removeAttribute('disabled', 'disabled');//иначе удалит атрибут дисаблед
    }
  }

  // устанавливают все обработчики
  _setEventListeners() {
    const popupInputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));//создается массив элементов полей методом Array.from
    const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);//в формах найти кнопки

    this._changeStateSubmitButton(popupInputList, buttonElement);//состояние кнопки при включении

    popupInputList.forEach((inputElement) => {//в массиве popupInputList методом forEach перебираем элементы
      inputElement.addEventListener('input', () => {// элементам добавить обработчик на введение данных input
        this._checkValidityForm(inputElement);//и вызывать функцию проверки валидности полей
        this._changeStateSubmitButton(popupInputList, buttonElement);//вызывать функцию проверки состояния кнопки сабмит
      });
    });
  }

  // публичный метод, который включает валидацию формы
  enableValidation() {
    this._formElement.addEventListener('submit', (event) => {//добавить обработчик
      event.preventDefault();//отменить стандартное поведение сабмита
    });

    this._setEventListeners();//для форм вызываем setEventListeners... ВСЕ!!!! СДАЮСЬ!!!!
  }

  reset() {
    const popupInputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));//создается массив элементов полей методом Array.from
    const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);//в формах найти кнопки

    this._changeStateSubmitButton(popupInputList, buttonElement);//вызывать функцию проверки состояния кнопки сабмит
  }
}
