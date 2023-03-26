let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
// поля формы
let nameInput = document.querySelector('.form__text-input_type_name');
let jobInput = document.querySelector('.form__text-input_type_discription');
let editButton = document.querySelector('.profile__button-edit');
let nameAuthor = document.querySelector('.profile__name');
let nameDescription = document.querySelector('.profile__description');
let closeButton = document.querySelector('.popup__close-button');
let editForm = document.querySelector('.form')

function openPopup()  {
  popup.classList.add('popup_opened');
  nameInput.value =  nameAuthor.textContent;
  jobInput.value = nameDescription.textContent;

}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameAuthor.textContent = nameInput.value;
  nameDescription.textContent = jobInput.value;
  closePopup();
  
}
const addCardButton = document.querySelector('.profile__button-add');
const popupAddCard = document.querySelector('.popup_add-card');
const closeAddButton = popupAddCard.querySelector('.popup__close-button');
const formAddCard = document.querySelector('.form_add-card');
const placeName = document.querySelector('.form__text-input_type_place-name');
const placeLink = document.querySelector('.form__text-input_type_place-link');
const buttonAddCard = popupAddCard.querySelector('.form__save-button');


const elementsPlace = document.querySelector('.elements');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 
function likeCardOnCLick(evt){
  evt.target.classList.toggle('element__like-button_active');
}
function openAddPopup(){
  popupAddCard.classList.add('popup_opened');
  placeName.value = '';
  placeLink.value = '';
}

function closeAddPopup(){
  popupAddCard.classList.remove('popup_opened');
}

function deleteCardOnClick (event) {
  event.target.parentNode.remove()
} 

const openCard = document.querySelector('.popup_open-card');
const closeCardButton = openCard.querySelector('.popup__close-button');
const figureImage = openCard.querySelector('.popup__figure-image');
const figureTitle = openCard.querySelector('.popup__figure-caption');


function openFigurePopup(name, link){
  figureImage.src = link
  figureTitle.alt = name
  figureTitle.textContent = name
  openCard.classList.add('popup_opened');
}
function closeFigurePopup(){
  openCard.classList.remove('popup_opened');
}

function createCard(initialCards){
    const elementsTemplate = document.querySelector('#element-template').content; //загрузил шаблон
    const elementTemplate = elementsTemplate.querySelector('.element').cloneNode(true); //загрузил данные из шаблона
    const elementTitle = elementTemplate.querySelector('.element__title');
    elementTitle.textContent = initialCards.name;
    const elementButtonDelete = elementTemplate.querySelector('.element__bucket-button'); //кнопка мусорки
    const elementImage = elementTemplate.querySelector('.element__image'); //передал изображение 
    elementImage.src = initialCards.link;
    elementImage.alt = initialCards.name;
    const likeButton = elementTemplate.querySelector('.element__like-button'); //записал сердечко    
    likeButton.addEventListener('click', evt => likeCardOnCLick(evt));
    elementsPlace.prepend(elementTemplate);
    elementButtonDelete.addEventListener('click', event => deleteCardOnClick(event)); //работа мусорки
    elementImage.addEventListener('click',() => openFigurePopup(initialCards.name, initialCards.link));
   
    
}
initialCards.forEach(createCard);

formAddCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const objNameUrl = {name: placeName.value, link: placeLink.value};
  placeName.value = '';
  placeLink.value = ''; 
  createCard(objNameUrl);
  closeAddPopup(popupAddCard);
})


closeCardButton.addEventListener('click', closeFigurePopup)
closeAddButton.addEventListener('click', closeAddPopup)
addCardButton.addEventListener('click', openAddPopup)
editForm.addEventListener('submit', handleFormSubmit)
editButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)


