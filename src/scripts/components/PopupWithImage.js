import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__figure-image');
        this._captionPopupImage = this._popup.querySelector('.popup__figure-caption');
    }

    open = (cardData) => {
        this._popupImage.src = cardData.link;
        this._popupImage.alt = cardData.name;
        this._captionPopupImage.textContent = cardData.name;
        super.open();
    }

}

