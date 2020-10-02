function enableValidation(config) {
  const showInputError = (formElement, inputElement, errorMessage) => {//обьявляем функцию, ккоторая показывает ошибку
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);//в формах находим нужный инпут в котором ошибка
    inputElement.classList.add(config.inputErrorClass);//инпуту добавляем класс с ошибкой подчеркивает нижнюю границу
    errorElement.textContent = errorMessage;//текстовое содержимое ошибки присваивает содержание из errorMessage (это чтото по умолчанию есть в JS я так поняла
    errorElement.classList.add(config.errorClass);// ошибка также присваивает класс для стилизации текстовой части ошибки
  };

  const hideInputError = (formElement, inputElement) => {//обьявляем функцию, которая скрывает ошибку
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); // находим элемент ошибки
    inputElement.classList.remove(config.inputErrorClass); // удаляем класс с ошибкой
    errorElement.classList.remove(config.errorClass);
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
    const popupInputList = Array.from(formElement.querySelectorAll(config.inputSelector));//создается массив элементов полей методом Array.from
    const buttonElement = formElement.querySelector(config.submitButtonSelector);//в формах найти кнопки

    toggleButtonState(popupInputList, buttonElement);//состояние кнопки при включении

    popupInputList.forEach((inputElement) => {//в массиве popupInputList методом forEach перебираем элементы
      inputElement.addEventListener('input', () => {// элементам добавить обработчик на введение данных input
        checkInputValid(formElement, inputElement);//и вызывать функцию проверки валидности полей
        toggleButtonState(popupInputList, buttonElement);//вызывать функцию проверки состояния кнопки сабмит
      });
    });
  };

  function hasInvalidInput(popupInputList) {//эта функция проверит наличие невалидного  поля и сообщает можно ли разблокировать сабмит
    return popupInputList.some((inputElement) => {//вернет валидное поле true
      return !inputElement.validity.valid;//поле невалидное
    });
  }

  function toggleButtonState(popupInputList, buttonElement) {//функция отключает и включает кнопку сабмит
    if (hasInvalidInput(popupInputList)) {//ecли инпут ввлидный
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'disabled');//присоединит атрибут дисаблед
    } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.removeAttribute('disabled', 'disabled');//иначе удалит атрибут дисаблед
    }
  }


    const popupFormList = Array.from(document.querySelectorAll(config.formSelector));//также как и в полях методом арайфром создаем массив форм
    popupFormList.forEach((popupForm) => {//перебрать формы
      popupForm.addEventListener('submit', (event) => {//добавить обработчик
        event.preventDefault();//отменить стандартное поведение сабмита
      });

      setEventListeners(popupForm);//для форм вызываем setEventListeners... ВСЕ!!!! СДАЮСЬ!!!!
    });
}


