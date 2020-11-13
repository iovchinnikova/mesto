// Класс UserInfo отвечает за управление отображением информации о пользователе на странице
export default class UserInfo {
  // Принимает в конструктор объект с селекторами двух элементов:
  // элемента имени пользователя и элемента информации о себе.
  constructor({selectorName, selectorInfo}) {
    this._elementName = document.querySelector(selectorName);
    this._elementInfo = document.querySelector(selectorInfo);
  }

  // Содержит публичный метод getUserInfo,
  // который возвращает объект с данными пользователя.
  // Этот метод пригодится когда данные пользователя
  // нужно будет подставить в форму при открытии.
  getUserInfo() {
    return {
      name: this._elementName.textContent,
      info: this._elementInfo.textContent,
    }
  }

  // Содержит публичный метод setUserInfo,
  // который принимает новые данные
  // пользователя и добавляет их на страницу.
  setUserInfo({name, info}) {
    this._elementName.textContent = name;
    this._elementInfo.textContent = info;
  }
}
