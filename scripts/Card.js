export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this.isLiked = false;
    this._cardSelector = cardSelector;
    console.log("я здесь");
  }

  // like() {
  //   this.isLiked = !this.isLiked;
  // }
  //
  _getTemplate() {


  }

  generateCard() {
    const newCardElement = document.querySelector(this._cardSelector).cloneNode(true);
    const elementPhoto = newCardElement.querySelector('.element__item');

    newCardElement.classList.remove('element__template');
    newCardElement.querySelector('.element__figcation-title').textContent = this._name;
    elementPhoto.setAttribute('src', this._link);
    elementPhoto.setAttribute('alt', this._name);

    return newCardElement;
  }
}


