import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Popup from "../scripts/components/Popup.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithDeleteForm from "../scripts/components/PopupWithDeleteForm.js";
import {
  validationConfig,
  popupEditAvatar,
  popupAddCard,
  elementsPlace,
  templateSelector,
  popupProfileSelector,
  popupImageSelector,
  popupDeleteSelector,
  configInfo
}from "../scripts/utils/dataObject.js";
import '../pages/index.css';
import Api from "../scripts/components/Api.js"
import { error } from "jquery";



const buttonAddCard = document.querySelector('.profile__button-add');
const formAddCard = document.querySelector('.form_add-card');
const profileEditButton = document.querySelector('.profile__button-edit');
const avatarEditButton = document.querySelector('.profile__button-avatar');
const buttonDeleteCard = document.querySelector('.element__bucket-button')

const editForm = document.querySelector('.form_edit-profile')

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '977f385f-236c-404d-bdba-a8b618ca5abd',
    'Content-Type': 'application/json'
  }
});


const popupDelete = new PopupWithDeleteForm(popupDeleteSelector, ({card, cardId}) => {
  api.delCard(cardId)
  .then(res => {
    card.removeCardElement()
    popupDelete.close()
    
  })
  .catch((error => console.error(`Ошибка удаления карточки ${error}`)))
  .finally(() => popupDelete.setupDefaultText())
})
popupDelete.setEventListeners();

const userInfo = new UserInfo(configInfo);

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  api.setUserInfo(data)
  .then(res => {
    userInfo.setUserInfo({username: res.name, description: res.about, avatar: res.avatar 
  })
  popupProfile.close()
})
  .catch((error => console.error(`Ошибка редактирования профиля ${error}`)))
  .finally(() => popupProfile.setupDefaultText())
})

const popupAdd = new PopupWithForm(popupAddCard, (data) => {
  Promise.all([api.getInfo(), api.addCard(data)])
  .then(([dataUser, dataCard]) => {
    dataCard.myid = dataUser._id;
    section.addItemPrepend(createNewCard(dataCard))
    popupAdd.close()
  })
  .catch((error => console.error(`Ошибка создания карточки ${error}`)))
  .finally(() => popupAdd.setupDefaultText())
})



const profilePopup = new Popup(popupProfileSelector);

const popupImage = new PopupWithImage(popupImageSelector);

const popupAvatar = new PopupWithForm(popupEditAvatar, (data) =>{
  api.setNewAvatar(data)
    .then(res => {console.log(res)
      userInfo.setUserInfo({username: res.name, description: res.about, avatar: res.avatar})
      popupAvatar.close()
    })
    .catch((error => console.error(`Ошибка редактирования автара ${error}`)))
    .finally(() => popupAvatar.setupDefaultText())
});
popupAvatar.setEventListeners()


function createNewCard(item) {
  const card = new Card(item, templateSelector, popupImage.open, popupDelete.open, (likeElement, cardId) => {
    if(likeElement.classList.contains('element__like-button_active')){
      api.delLike(cardId)
      .then(res =>{
        console.log(res)
        card.isLiked(res.likes);
      })
      .catch((error => console.error(`Ошибка дизлайка ${error}`)))
    }
    else{
      api.addLike(cardId)
      .then(res => {
        console.log(res)
        card.isLiked(res.likes)
      })
      .catch((error => console.error(`Ошибка добавления лайка ${error}`)))
    }
  });
  const cardElement = card.createCard()
  return cardElement
}


const section = new Section(element => {
    section.addItem(createNewCard(element))
  }, elementsPlace) 


const editFormValidator = new FormValidator(validationConfig, editForm);
editFormValidator.enableValidation()

const addFormValidator = new FormValidator(validationConfig, formAddCard);
addFormValidator.enableValidation()

profilePopup.setEventListeners();
popupAdd.setEventListeners()
popupProfile.setEventListeners()
popupImage.setEventListeners();




function openEditAvatar(){
  popupAvatar.open()
}


function openEditPopup() {
 editFormValidator.resetFormError();
 popupProfile.setInputValues(userInfo.getUserInfo());
 profilePopup.open();
 }

 function openAddPopup() {
  addFormValidator.resetFormError();
  popupAdd.open();
}
// function openDeleteCard(){
//   popupDelete.open();
// }


avatarEditButton.addEventListener('click', openEditAvatar)
profileEditButton.addEventListener('click', openEditPopup)
buttonAddCard.addEventListener('click', openAddPopup)
// buttonDeleteCard.addEventListener('click', openDeleteCard)

Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCard])  =>{
    dataCard.forEach(element => element.myid = dataUser._id);
    userInfo.setUserInfo({username: dataUser.name, description: dataUser.about, avatar: dataUser.avatar})
    section.addCardFromArray(dataCard)
  })
  .catch((error => console.error(`Ошибка редактирования профиля ${error}`)))
  