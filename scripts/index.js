let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
// поля формы
let nameInput = document.querySelector('.form__text-input_type_name');
let jobInput = document.querySelector('.form__text-input_type_discription');
let editButton = document.querySelector('.profile__button-edit');
let NameAuthor = document.querySelector('.profile__name');
let NameDescription = document.querySelector('.profile__description');
let closeButton = document.querySelector('.popup__close-button');
let editForm = document.querySelector('.form')

function openPopup()  {
  popup.classList.add('popup_opened');
  nameInput.value =  NameAuthor.textContent;
  jobInput.value = NameDescription.textContent;

}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  NameAuthor.textContent = nameInput.value;
  NameDescription.textContent = jobInput.value;
  closePopup();
  
}
editForm.addEventListener('submit', handleFormSubmit)
editButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)


