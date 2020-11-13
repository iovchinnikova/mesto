export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openPopup = handleCardClick;
  }

  // работают с разметкой - создает новый элемент для карточки на основе шаблона
  _getTemplate() {
    const template = document.querySelector(this._templateSelector);
    const copyOfTemplate = template.cloneNode(true);
    copyOfTemplate.classList.remove('element__template');
    return copyOfTemplate;
  }

  // устанавливают слушателей событий;
  _setEventListeners() {
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteHandler();
    });
    this._element.querySelector('.element__figcation-like').addEventListener('click', () => {
      this._likeHandler();
      //
    });
    this._element.querySelector('.element__item').addEventListener('click', () => {
      this._viewHandler();
    });
  }

  // приватные методы для каждого обработчика: удаление карточки
  _deleteHandler() {
    this._element.remove();
  }

// приватные методы для каждого обработчика: клик на лайк
  _likeHandler() {
    this._element.querySelector('.element__figcation-like').classList.toggle('element__figcation-like_active');
  }

  // приватные методы для каждого обработчика: просмотр картинки в попап
  _viewHandler() {
    this._openPopup(this._link, this._name);
  }

  // метод, который возвращает полностью работоспособный и наполненный данными элемент карточки
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__figcation-title').textContent = this._name;
    this._element.querySelector('.element__item').setAttribute('src', this._link);
    this._element.querySelector('.element__item').setAttribute('alt', this._name);
    this._setEventListeners();
    return this._element;
  }
}
