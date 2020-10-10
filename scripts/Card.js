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
    	const cardElement = document.querySelector(this._cardSelector).querySelector('.element').cloneNode(true);

      return cardElement;
    }

  _setEventListeners() {
    newCardElement.querySelector('.element__figcation-like').addEventListener('click', () => {
      this._handleMessageClick();
    });
  }

  _handleMessageClick() {
    newCardElement.querySelector('.element__figcation-like').classList.toggle('element__figcation-like_active');
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
    const newCardElement = document.querySelector(this._cardSelector).cloneNode(true);
    const elementPhoto = newCardElement.querySelector('.element__item');
    // super._setEventListeners();
    // this._element = super._getTemplate();
    newCardElement.classList.remove('element__template');
    newCardElement.querySelector('.element__figcation-title').textContent = this._name;
    elementPhoto.setAttribute('src', this._link);
    elementPhoto.setAttribute('alt', this._name);
    console.log('ужас9');

    return newCardElement;
    console.log('ужас10');
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

