export default class Card {
  constructor(cardData, templateSelector, openFigurePopup) {
    this._cardData = cardData;
    this._name = cardData.title;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._openFigurePopup = openFigurePopup;

  }

  _deleteCardOnClick = () => {
  this._cloneElement.remove();
  this._cloneElement = null;
  }

  _toggleLike = () => {
    this._likeElement.classList.toggle('element__like-button_active');
  }
  _handleOpenFigurePopup = () => {
    this._openFigurePopup(this._cardData)
  }

  _setEventListeners() {
    this._imgElement.addEventListener('click', this._handleOpenFigurePopup);
    this._likeElement.addEventListener('click', this._toggleLike);
    this._bucketElement.addEventListener('click', this._deleteCardOnClick);
  }

  _getTemplateClone() {
    return document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);

  }

  createCard() {
    this._cloneElement = this._getTemplateClone();
    this._imgElement = this._cloneElement.querySelector('.element__image');
    this._likeElement = this._cloneElement.querySelector('.element__like-button');
    this._bucketElement = this._cloneElement.querySelector('.element__bucket-button');
    this._titleElement = this._cloneElement.querySelector('.element__title');
    this._imgElement.src = this._link;
    this._imgElement.alt = this._name;
    this._titleElement.textContent = this._name;
    this._setEventListeners();
    return this._cloneElement;
  }
};