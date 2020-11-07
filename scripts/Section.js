export default class Section {
  constructor({ items, renderer }, templateSelector) {
    this._items = initialArray;
    this._renderer = renderer;

    this._container = document.querySelector(templateSelector);
  }

  //публичный метод для отрисовки всех элементов

  renderItems() {
    this._renderedItems.forEach(item => this._renderer(item));
  }

  //публичный метод, который принимает DOM-элемент и добавляет его в контейнер.
  addItem(item) {
    this._container.append(item);
  }
}

