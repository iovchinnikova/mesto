const showInputError = (formElement, inputElement, errorMessage) => {//обьявляем функцию, ккоторая показывает ошибку
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);//в формах находим нужный инпут в котором ошибка
  inputElement.classList.add('popup__input_error');//инпуту добавляем класс с ошибкой подчеркивает нижнюю границу
  errorElement.textContent = errorMessage;//текстовое содержимое ошибки присваивает содержание из errorMessage (это чтото по умолчанию есть в JS я так поняла
  errorElement.classList.add('popup__input-error');// ошибка также присваивает класс для стилизации текстовой части ошибки
};

const hideInputError = (formElement, inputElement) => {//обьявляем функцию, которая скрывает ошибку
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); // находим элемент ошибки
  inputElement.classList.remove('popup__input_error'); // удаляем класс с ошибкой
  errorElement.classList.remove('popup__input-error');
  errorElement.textContent = '';
};

const checkInputValid = (formElement, inputElement) => {//функция проверки инпута на валидность
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement);
  } else {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
};

const setEventListeners = (formElement) => {//фунцкия добавления обработчиков полей внутри формы
  const popupInputList = Array.from(formElement.querySelectorAll('.popup__input'));//создается массив элементов полей методом Array.from
  const buttonElement = formElement.querySelector('.popup__button-save');//в формах найти кнопки

  toggleButtonState (popupInputList, buttonElement);//состояние кнопки при включении

  popupInputList.forEach((inputElement) => {//в массиве popupInputList методом forEach перебираем элементы
    inputElement.addEventListener('input', () => {// элементам добавить обработчик на введение данных input
      checkInputValid(formElement, inputElement);//и вызывать функцию проверки валидности полей
      toggleButtonState (popupInputList, buttonElement);//вызывать функцию проверки состояния кнопки сабмит
    });
  });
};

function hasInvalidInput (popupInputList) {//эта функция проверит наличие невалидного  поля и сообщает можно ли разблокировать сабмит
  return popupInputList.some((inputElement) => {//вернет валидное поле true
    return !inputElement.validity.valid;//поле невалидное
  });
}

function toggleButtonState (popupInputList, buttonElement) {//функция отключает и включает кнопку сабмит
  if (hasInvalidInput(popupInputList)) {//ecли инпут ввлидный
    buttonElement.classList.add('popup__button_disabled');
    buttonElement.setAttribute('disabled', 'disabled');//присоединит атрибут дисаблед
  } else {
    buttonElement.classList.remove('popup__button_disabled');
    buttonElement.removeAttribute('disabled', 'disabled');//иначе удалит атрибут дисаблед
  }
}

function enableValidation () {//функция добавления обработиков формам
  const popupFormList = Array.from(document.querySelectorAll('.popup__form'));//также как и в полях методом арайфром создаем массив форм
  popupFormList.forEach((popupForm) => {//перебрать формы
    popupForm.addEventListener('submit', (event) =>{//добавить обработчик
      event.preventDefault();//отменить стандартное поведение сабмита
    });

    setEventListeners(popupForm);//для форм вызываем setEventListeners... ВСЕ!!!! СДАЮСЬ!!!!
  });
}

enableValidation();


