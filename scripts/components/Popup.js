export  default class Popup{
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButton = this._popup.querySelector('.popup__close-button');
    }

    open(){
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closePopupEsc);
    }

    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closePopupEsc);
    }
    
    _handleCloseButton = () => {
        this.close();
    }

    _closePopupEsc = (evt) => {
        if (evt.key === 'Escape') {
          this.close()
        }
      }

      _closePopupOverlayClick = (evt) => {
           if (evt.target === evt.currentTarget) {
             this.close();
           }
         };

    setEventListeners(){
        this._popupCloseButton.addEventListener('click', this._handleCloseButton);
        this._popup.addEventListener('mousedown', this._closePopupOverlayClick)
    }

}