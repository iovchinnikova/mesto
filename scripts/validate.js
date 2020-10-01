const popupForm = document.querySelector('.popup__form');
const popupInput = popupForm.querySelector('.popup__input');
// const popupError = popupForm.querySelector('.popup__input-error');

const showInputError = (popupForm, popupInput, errorMessage) => {//обьявл]ем функцию обьявления ошибки
  const errorElement = popupForm.querySelector('#${popupInput.id}-error');//в формах находим нужный класс и присваиваем его ошибке
  popupInput.classList.add('popup__input_type_error');//инпуту присоединяем новыйй класс
  errorElement.textContent = errorMessage;//текстовое содержимое ошибки присваивает содержание из errorMessage (это чтото по умолчанию есть в JS я так поняла
  errorElement.classList.add('popup__input_type_error_active');// ошибка также присваивает класс и становится активной
};

const hideInputError = (popupForm, popupInput) => {//эта функция убирает сообщение об ошибке
  const errorElement = popupForm.querySelector(popupInput.id);
  popupInput.classList.remove('popup__input_type_error');
  errorElement.textContent = '';
  errorElement.classList.remove('popup__input_type_error_active');
};

const chekInputValidaty = (popupForm, popupInput) => {//функция проверки инпута на валидность
  if (!popupInput.validity.valid) {//если инпут не валиден
    showInputError(popupForm, popupInput, popupInput.validationMessage);//выполняется функция обьявления ошибки
  } else {
    hideInputError(popupForm, popupInput);//если валиден, то сообщения об ошибке не появляется
  }
};

const hasInvalidInput = (popupInputList) => {//эта функция проверит наличие невалидного  поля и сообщает можно ли разблокировать сабмит
  return popupInputList.some((popupInput) => {//вернет валидное поле true
    return !popupInput.validity.valid;//поле невалидное
  });
};

const toggleButtonState = (popupInputList, buttonElement) => {//функция отключает и включает кнопку сабмит
  if (hasInvalidInput(popupInputList)) {//ecли инпут ввлидный
    buttonElement.setAttribute(disabled,true);//присоединит атрибут дисаблед
  } else {
    buttonElement.removeAttribute(disabled);//иначе удалит атрибут дисаблед
  }
};

const setEventListeners = (popupForm) => {//фунцкия добавления обработчиков полей внутри формы
  const popupInputList = Array.from(popupForm.querySelectorAll('popup__input'));//создается массив элементов полей методом Array.from
  const buttonElement = popupForm.querySelector('.popup__button-save');//в формах найти кнопки

  toggleButtonState (popupInputList, buttonElement);//состояние кнопки при включении

  popupInputList.forEach((popupInput) => {//в массиве popupInputList методом forEach перебираем элементы
    popupInput.addEventListener('input', function () {// элементам добавить обработчик на введение данных input
      chekInputValidaty(popupForm, popupInput);//и вызывать функцию проверки валидности полей
      toggleButtonState (popupInputList, buttonElement);//вызывать функцию проверки состояния кнопки сабмит
    });
  });
};

const enableValidation = () => {//функция добавления обработиков формам
  // params.formSelector
  const popupFormList = Array.from(document.querySelectorAll('popup__form'));//также как и в полях методом арайфром создаем массив форм
  popupFormList.forEach((popupForm) => {//перебрать формы
    popupForm.addEventListener('submit', (evt) =>{//добавить обработчик
      evt.preventDefault();//отменить стандартное поведение сабмита
    });
    setEventListeners(popupForm);//для форм вызываем setEventListeners... ВСЕ!!!! СДАЮСЬ!!!!
  });
};
//
// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });

// enableValidation();
// // const fieldsetList =


// const Form = document.querySelector('.popup__form');
// const Input = Form.querySelector('.popup__input');
// // const popupError = popupForm.querySelector('.popup__input-error');
//
// const showInputError = (FormElement, InputElement, errorMessage) => {
//   console.log('ghbdtn1');
//   const errorElement = FormElement.querySelector('#${inputElement.id}-error');
//   InputElement.classList.add('popup__input-error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('popup__input-error_active');
//
// };
//
// const hideInputError = (FormElement, InputElement) => {
//   console.log('ghbdtn2');
//   const errorElement = FormElement.querySelector('#${inputElement.id}-error');
//   InputElement.classList.remove('popup__input-error');
//   errorElement.textContent = '';
//   errorElement.classList.remove('popup__input-error_active');
//
// };
//
// const chekInputValidaty = (FormElement, InputElement) => {
//   console.log('ghbdtn3');
//   if (!InputElement.validity.valid) {
//     showInputError(FormElement, InputElement, Input.validationMessage);
//   } else {
//     hideInputError(FormElement, InputElement);
//   }
//
// };
//
// const hasInvalidInput = (InputList) => {
//   console.log('ghbdtn4');
//
//   return InputList.some((InputElement) => {
//     return !InputElement.validity.valid;
//
//   });
// };
// const toggleButtonState = (InputList, buttonElement) => {
//   console.log('ghbdtn5');
//
//   if (hasInvalidInput(InputList)) {
//     buttonElement.classList.add('popup__button-save_inactiv');
//   } else {
//     buttonElement.classList.remove('popup__button-save_inactiv');
//   }
// };
// const setEventListeners = (FormElement) => {
//
//   console.log('ghbdtn6');
//   const InputList = Array.from(FormElement.querySelectorAll('popup__input'));
//   const buttonElement = FormElement.querySelector('.popup__button-save');
//
//   toggleButtonState (InputList, buttonElement);
//
//   InputList.forEach((InputElement) => {
//     InputElement.addEventListener('input', function () {
//       chekInputValidaty(FormElement, InputElement);
//       toggleButtonState (InputList, buttonElement);
//     });
//   });
// };
//
// const enableValidation = () => {
//   console.log('ghbdtn7');
//
//   const FormList = Array.from(document.querySelectorAll('popup__form'));
//   FormList.forEach((FormElement) => {
//     FormElement.addEventListener('submit', (evt) =>{
//       evt.preventDefault();
//     });
//     setEventListeners(FormElement);
//   });
// };
//  enableValidation();
// // // const fieldsetList =
