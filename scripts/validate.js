const popupForm = document.querySelector('.popup__form');
const popupInput = popupForm.querySelector('.popup__input');
// const popupError = popupForm.querySelector('.popup__input-error');

const showInputError = (popupFormElement, popupInputElement, errorMessage) => {
  const errorElement = popupFormElement.querySelector(popupInputElement.id);
  popupInputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};
showInputError(popupFormElement, popupInputElement);

const hideInputError = (popupFormElement, popupInputElement) => {
  const errorElement = popupFormElement.querySelector(popupInputElement.id);
  popupInputElement.classList.remove('popup__input_type_error');
  errorElement.textContent = '';
  errorElement.classList.remove('popup__input-error_active');
};

const chekInputValidaty = (popupFormElement, popupInputElement) => {
  if (!popupInputElement.validity.valid) {
    showInputError(popupFormElement, popupInputElement, popupInput.validationMessage);
  } else {
    hideInputError(popupFormElement, popupInputElement);
  }
};

const hasInvalidInput = (popupInputList) => {
  return popupInputList.some((popupInputElement) => {
    return !popupInputElement.validity.valid;
  });
};

const toggleButtonState = (popupInputList, buttonElement) => {
  if (hasInvalidInput(popupInputList)) {
    buttonElement.setAttribute(disabled,true);
  } else {
    buttonElement.removeAttribute(disabled);
  }
};

const setEventListeners = (popupFormElement) => {
  const popupInputList = Array.from(popupFormElement.querySelectorAll('popup__input'));
  const buttonElement = popupFormElement.querySelector('.popup__button-save');

  toggleButtonState (popupInputList, buttonElement);

  popupInputList.forEach((popupInputElement) => {
    popupInputElement.addEventListener('input', function () {
      chekInputValidaty(popupFormElement, popupInputElement);
      toggleButtonState (popupInputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const popupFormList = Array.from(document.querySelectorAll('popup__form'));
  popupFormList.forEach((popupFormElement) => {
    popupFormElement.addEventListener('submit', (evt) =>{
      evt.preventDefault();
    });
    setEventListeners(popupFormElement);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

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
