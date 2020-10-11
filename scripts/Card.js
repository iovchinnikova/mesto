export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    // this.isLiked = false;
    this._cardSelector = cardSelector;
    console.log("я здесь");
    console.log('ужас10');
  }

  _getTemplate() {
    console.log('ужас11');
    return document.querySelector(this._cardSelector).cloneNode(true).children[0];
    console.log('ужас12');
    }

  _setEventListeners() {
    console.log('ужас13');
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteHandler();
    });
  }

  _deleteHandler() {
    this._element.remove();
  }


  // generateCard() {
  //   this._element = super._getTemplate();
  //   super._setEventListeners();
  //
  //   this._element.querySelector('.element__item').src = this._link;
  //   this._element.querySelector('.element__figcation-title').textContent = this._name;
  //
  //   return this._element;
  // }

  generateCard() {
    // this._element = this._getTemplate();
    // this._element.querySelectorAll('.element__figcation-title').textContent = this._name;
    // this._setEventListeners();
    // return this._element;
    const newCardElement = document.querySelector(this._cardSelector).cloneNode(true);
    const elementPhoto = newCardElement.querySelector('.element__item');
    this._setEventListeners();
    this._element = this._getTemplate();
    newCardElement.classList.remove('element__template');
    newCardElement.querySelector('.element__figcation-title').textContent = this._name;
    elementPhoto.setAttribute('src', this._link);
    elementPhoto.setAttribute('alt', this._name);
    console.log('ужас14');

    return newCardElement;
    console.log('ужас15');
  }










  // _addCard(newCardElement, start) {
  //   const elementPhoto = newCardElement.querySelector('.element__item');
  //   const elementLike = newCardElement.querySelector('.element__figcation-like');
  //
  //   newCardElement.querySelector('.element__delete').addEventListener('click', () => {
  //     newCardElement.remove();
  //   });
  //
  //   elementLike.addEventListener('click', function (event) {
  //     elementLike.classList.toggle('element__figcation-like_active');
  //   });
  //
  //   elementPhoto.addEventListener('click', handleOpenImagePopupClick);
  //
  // }
}

