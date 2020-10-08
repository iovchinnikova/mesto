const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this.isLiked = false;
    this._cardSelector = cardSelector;
  }
  like() {
    this.isLiked = !this.isLiked;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector) // теперь здесь this._cardSelector
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;

    // const cardElement = document
    //   .querySelector(this._cardSelector)
    //   .content
    //   .querySelector('.card')
    //   .cloneNode(true);

  }

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();

    // Добавим данные
    this._element.querySelector('.element__item').src = this._link;
    this._element.querySelector('.element__figcation-title').textContent = this._name;


    // Вернём элемент наружу
    return this._element;
  }
}

//Теперь цикл обойдёт массив messageList и для каждого его элемента:
 // создаст новый экземпляр класса Card,
 // подготовит карточку к публикации,
  //добавит новую карточку в DOM.

initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item, '.element__template');
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM append или prepend?
  document.querySelector('.element__template').prepend(cardElement);
});
