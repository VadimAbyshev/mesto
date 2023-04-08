const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.form__text-input',
    submitButtonSelector: '.popup__form_save-button',
    errorSelector: '.popup__invalid_type_',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_invalid',
    textErrorClass: 'popup__error_visible'
  }; 
const log = console.log;


function enableValidation(validationConfig) {
    const forms = Array.from(document.querySelectorAll(validationConfig.formSelector));
    forms.forEach((form) =>{
        const inputList = form.querySelectorAll(validationConfig.inputSelector);
        const buttonSave = form.querySelector(validationConfig.submitButtonSelector);
        hangEventListenner(inputList, validationConfig.errorSelector, buttonSave,  validationConfig.inactiveButtonClass, validationConfig.textErrorClass, validationConfig.inputErrorClass)
    });
};

function hangEventListenner(inputList, errorSelector, buttonSave, inactiveButtonClass,  textErrorClass, inputErrorClass){
    inputList.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(input, errorSelector, textErrorClass, inputErrorClass,);
            //togglleButtonState(input, buttonSave, inactiveButtonClass)
        })
    })
};

function checkInputValidity(input, errorSelector, textErrorClass, inputErrorClass){
    const invalidationError = document.querySelector(`${errorSelector}${input.name}`)
    log(invalidationError)

    if (input.validity.valid){
        hideInputError(input, invalidationError, textErrorClass, inputErrorClass)
        log('Yes')
    }else{
        showInputError(input, invalidationError,  textErrorClass, inputErrorClass)
        log('No')
    };

};

function hideInputError(input, invalidationError, textErrorClass, inputErrorClass){
    input.classList.remove(inputErrorClass);
    invalidationError.textContent = '';
    invalidationError.classList.remove(textErrorClass);
    
}

function showInputError(input, invalidationError,  textErrorClass, inputErrorClass){
    input.classList.add(inputErrorClass);
    invalidationError.textContent = input.validationMessage;
    invalidationError.classList.add(textErrorClass);
}

enableValidation(validationConfig);