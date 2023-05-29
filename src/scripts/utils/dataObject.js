const initialCards = [
    {
      title: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      title: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      title: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      title: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      title: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      title: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.form__text-input',
    submitButtonSelector: '.popup__save-button',
    errorSelector: '.popup__invlid-',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_invalid',
    textErrorClass: 'popup__error_visible'
};

const popupDeleteSelector = '.popup_delete-card';
const popupEditAvatar ='.popup_edit-avatar';
const popupAddCard = '.popup_add-card';
const elementsPlace = '.elements';
const templateSelector = '#element-template';
const popupProfileSelector = '.popup_edit-profile';
const popupImageSelector = '.popup_open-card';

const configInfo = {
  nameAuthor: '.profile__name',
  nameDescription: '.profile__description',
  profileAvatar: '.profile__avatar'
};

export {
  initialCards,
  validationConfig,
  popupAddCard,
  popupEditAvatar,
  elementsPlace,
  templateSelector,
  popupProfileSelector,
  popupImageSelector,
  popupDeleteSelector,
  configInfo
}