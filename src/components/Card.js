import PopupWithForm from "./PopupWithForm";

export default class Card {
  constructor(data, templateSelector, handleCardClick, api, userId) {
    this._userId = userId;
    this._owner = data.owner;
    this._id = data._id;
    this._likes = data.likes;
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openPopup = handleCardClick;
    this._api = api;
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
    const elementDelete = this._element.querySelector('.element__delete');
    if (this._owner._id === this._userId) {
      elementDelete.addEventListener('click', () => {
        this._deleteHandler();
      });
    } else {
      elementDelete.remove();
    }
    this._elementLike.addEventListener('click', () => {
      this._likeHandler();
    });
    this._element.querySelector('.element__item').addEventListener('click', () => {
      this._viewHandler();
    });
  }

  // приватные методы для каждого обработчика: удаление карточки
  _deleteHandler() {
    const confirmDeletePopup = new PopupWithForm('.popup__confirm', (inputValues, onServerSuccess) => {
      this._api.deletingACard(this._id)
        .then(() => {
          this._element.remove();
          onServerSuccess();
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    }, 'Удаление...');

    confirmDeletePopup.open();
    confirmDeletePopup.setEventListeners();
  }

// приватные методы для каждого обработчика: клик на лайк
  _likeHandler() {
    if (this._elementLike.classList.contains('element__figcation-like_active')) {
      this._api.removingTheLike(this._id)
        .then((newCard) => {
          this._serverLikeHandler(newCard);
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    } else {
      this._api.likeSetting(this._id)
        .then((newCard) => {
          this._serverLikeHandler(newCard);
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    }
  }

  _serverLikeHandler(newCard) {
    this._likes = newCard.likes;
    this._renderLike();
    this._renderLikeCount();
  }

  // приватные методы для каждого обработчика: просмотр картинки в попап
  _viewHandler() {
    this._openPopup(this._link, this._name);
  }

  _renderLike() {
    if (this._likes.some((like) => {
      return this._userId === like._id;
    })) {
      this._elementLike.classList.add('element__figcation-like_active');
    } else {
      this._elementLike.classList.remove('element__figcation-like_active');
    }
  }

  _renderLikeCount() {
    this._elementLikeCount.textContent = this._likes.length;
  }

  // метод, который возвращает полностью работоспособный и наполненный данными элемент карточки
  generateCard() {
    this._element = this._getTemplate();
    this._elementLike = this._element.querySelector('.element__figcation-like');
    this._elementLikeCount = this._element.querySelector('.element__figcation-like-count');
    const elementItem = this._element.querySelector('.element__item');
    this._element.querySelector('.element__figcation-title').textContent = this._name;
    elementItem.setAttribute('src', this._link);
    elementItem.setAttribute('alt', this._name);
    this._setEventListeners();
    this._renderLike();
    this._renderLikeCount();
    return this._element;
  }
}
