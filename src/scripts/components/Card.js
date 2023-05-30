export default class Card {
  constructor(cardData, templateSelector, openFigurePopup, openDelete, changeLike) {
    this._myId = cardData.myid;
    this._ownerId = cardData.owner._id;
    this._likes = cardData.likes;
    this._cardData = cardData;
    this._changeLike = changeLike;
    this._cardId = cardData._id;
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._openFigurePopup = openFigurePopup;
    this._likesLength = cardData.likes.length;
     this._openDelete = openDelete;
    this._cloneElement = this._getTemplateClone();
    this._imgElement = this._cloneElement.querySelector('.element__image');
    this._likeElement = this._cloneElement.querySelector('.element__like-button');
    this._bucketElement = this._cloneElement.querySelector('.element__bucket-button');
    this._titleElement = this._cloneElement.querySelector('.element__title');
    this._counter = this._cloneElement.querySelector('.element__like-counter');
  }

  _deleteCardElement = () => {
    this._openDelete(this, this._cardId )
  }



  _toggleLike = () => {
    this._changeLike(this._likeElement, this._cardId)
  
  }

  setLikes(likes){
    this._likeElement.classList.toggle('element__like-button_active');
    this._counter.textContent = likes.length;
  }

  _handleOpenFigurePopup = () => {
    this._openFigurePopup(this._cardData)
  }

  _setEventListeners() {
    this._imgElement.addEventListener('click', this._handleOpenFigurePopup);
    this._likeElement.addEventListener('click', this._toggleLike);
    this._bucketElement.addEventListener('click', this._deleteCardElement);
  }

  _getTemplateClone() {
    return document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);

  }

  _changesVisibleTrashButton(){
    if (this._myId === this._ownerId){
      this._bucketElement.style.display = 'block'
    }
    else{
      this._bucketElement.style.display = 'none'
    }
  }

  _checkLikes(){
    this._likes.forEach(item => {
      if(item._id === this._myId){
        this._likeElement.classList.add('element__like-button_active')
        return
      }
    });
     this._counter.textContent = this._likesLength;
  }

  removeCardElement(){
    this._cloneElement.remove();
    this._cloneElement = null;
}

  createCard() {
    this._imgElement.src = this._link;
    this._imgElement.alt = this._name;
    this._titleElement.textContent = this._name;
    this._changesVisibleTrashButton();
    this._checkLikes();
    this._setEventListeners();
    return this._cloneElement;
  }


};

