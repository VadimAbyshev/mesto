import Popup from "./Popup";
export default class PopupWithDeleteForm extends Popup{
    constructor(popupSelector, submitFunction){
        super(popupSelector);
        this._submitFunction = submitFunction;
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._form.querySelector('.form__save-button');
        this._defaultButtonText = this._submitButton.textContent;
    }

    setupDefaultText(){
        this._submitButton.textContent = this._defaultButtonText;
    }
    
setEventListeners(){
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._submitButton.textContent = `${this._submitButton.textContent}...`
        this._submitFunction(this._itemId);
        
    })
}

// open = ({card, cardId}) => {
//     super.open();
//     this._element = card;
//     this._cardId = cardId;
//     console.log(this._cardId)
// }

open = (item, itemId) => {
    super.open();
    this._item = item;
    this._itemId = itemId;
    console.log(this._itemId)
  }
  getElement = () => {
    return this._item ;
  }

}