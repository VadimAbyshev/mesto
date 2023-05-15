import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Popup from "../scripts/components/Popup.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import {
  initialCards,
  validationConfig,
  popupAddCard,
  elementsPlace,
  templateSelector,
  popupProfileSelector,
  popupImageSelector,
  configInfo
}from "../scripts/utils/dataObject.js";
import '../pages/index.css';



const buttonAddCard = document.querySelector('.profile__button-add');
const formAddCard = document.querySelector('.form_add-card');
const profileEditButton = document.querySelector('.profile__button-edit');


const editForm = document.querySelector('.form_edit-profile')





const userInfo = new UserInfo(configInfo);

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data)
})

const popupAdd = new PopupWithForm(popupAddCard, (data) => {
  section.addItem(createNewCard(data))
})


const profilePopup = new Popup(popupProfileSelector);

const popupImage = new PopupWithImage(popupImageSelector);



function createNewCard(item) {
  const card = new Card(item, templateSelector, popupImage.open);
  const cardElement = card.createCard()
  return cardElement
}
const section = new Section({
  items: initialCards,
  renderer: (item) => {
    section.addItem(createNewCard(item))
  }
}, elementsPlace) 
section.addCardFromArray()

const editFormValidator = new FormValidator(validationConfig, editForm);
editFormValidator.enableValidation()

const addFormValidator = new FormValidator(validationConfig, formAddCard);
addFormValidator.enableValidation()

profilePopup.setEventListeners();
popupAdd.setEventListeners()
popupProfile.setEventListeners()
popupImage.setEventListeners();







function openEditPopup() {
 editFormValidator.resetFormError();
 popupProfile.setInputValues(userInfo.getUserInfo());
 profilePopup.open();
 }

 function openAddPopup() {
  addFormValidator.resetFormError();
  popupAdd.open();
}




profileEditButton.addEventListener('click', openEditPopup)
buttonAddCard.addEventListener('click', openAddPopup)

