export default class Section {
  // Первым параметром конструктора принимает
  // объект с двумя свойствами: items и renderer.
  // Свойство items — это массив данных, которые
  // нужно добавить на страницу при инициализации класса.
  // Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
  // Второй параметр конструктора — селектор контейнера, в который нужно добавлять созданные элементы.
  constructor({ items, renderer }, templateSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(templateSelector);
  }

  //публичный метод для отрисовки всех элементов
  renderItems() {
    this._items.forEach(item => this._container.append(this._renderer(item)));
  }

  //публичный метод, который принимает DOM-элемент и добавляет его в контейнер.
  addItem(element) {
    this._container.prepend(element);
  }
}


