import initialCards from "./dataObject.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { validationConfig } from "./dataObject.js";
const profilePopup = document.querySelector('.popup_edit-profile');
const nameInput = document.querySelector('.form__text-input_type_name');
const jobInput = document.querySelector('.form__text-input_type_discription');
const profileEditButton = document.querySelector('.profile__button-edit');
const nameAuthor = document.querySelector('.profile__name');
const nameDescription = document.querySelector('.profile__description');
const profileCloseButton = document.querySelector('.popup__close-button');
const editForm = document.querySelector('.form_edit-profile')


function openPopup(popup) {

  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

function closePopupOverlayClick(e) {
  if (e.target === e.currentTarget) {
    closePopup(e.target)
  }
};
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function openEditPopup() {
  editFormValidator.resetFormError();
  openPopup(profilePopup);
  nameInput.value = nameAuthor.textContent;
  jobInput.value = nameDescription.textContent;
}

function closeEditPopup() {
  closePopup(profilePopup);
}


function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameAuthor.textContent = nameInput.value;
  nameDescription.textContent = jobInput.value;
  closePopup(profilePopup);
}

const buttonAddCard = document.querySelector('.profile__button-add');
const popupAddCard = document.querySelector('.popup_add-card');
const buttonAddClose = popupAddCard.querySelector('.popup__close-button');
const formAddCard = document.querySelector('.form_add-card');
const placeName = document.querySelector('.form__text-input_type_place-name');
const placeLink = document.querySelector('.form__text-input_type_place-link');
const saveAddCard = popupAddCard.querySelector('.form__save-button');
const templateSelector = '#element-template';

const elementsPlace = document.querySelector('.elements');

function createNewCard(item) {
  const card = new Card(item, templateSelector, openFigurePopup);
  const cardElement = card.createCard()
  return cardElement
}

function openAddPopup() {
  addFormValidator.resetFormError();
  openPopup(popupAddCard);
}

function closeAddPopup() {
  closePopup(popupAddCard);
}

const openCard = document.querySelector('.popup_open-card');
const closeCardButton = openCard.querySelector('.popup__close-button');
const figureImage = openCard.querySelector('.popup__figure-image');
const figureTitle = openCard.querySelector('.popup__figure-caption');

function openFigurePopup(name, link) {
  figureImage.src = link
  figureTitle.alt = name
  figureTitle.textContent = name
  openPopup(openCard);
}
function closeFigurePopup() {
  closePopup(openCard);
}

initialCards.forEach(function (item) {
  elementsPlace.prepend(createNewCard(item))
});

formAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const namedUrl = { name: placeName.value, link: placeLink.value };
  elementsPlace.prepend(createNewCard(namedUrl));
  evt.target.reset();
  closeAddPopup(popupAddCard);
});

const editFormValidator = new FormValidator(validationConfig, editForm);
editFormValidator.enableValidation()

const addFormValidator = new FormValidator(validationConfig, formAddCard);
addFormValidator.enableValidation()



profileEditButton.addEventListener('click', openEditPopup)
profileCloseButton.addEventListener('click', closeEditPopup)
closeCardButton.addEventListener('click', closeFigurePopup)
buttonAddClose.addEventListener('click', closeAddPopup)
buttonAddCard.addEventListener('click', openAddPopup)
editForm.addEventListener('submit', handleProfileFormSubmit)
popupAddCard.addEventListener('mousedown', (e) => closePopupOverlayClick(e))
profilePopup.addEventListener('mousedown', (e) => closePopupOverlayClick(e))
popupAddCard.addEventListener('mousedown', (e) => closePopupOverlayClick(e))
openCard.addEventListener('click', (e) => closePopupOverlayClick(e))
