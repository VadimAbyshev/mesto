import { validationConfig } from "../utils/dataObject.js";




export default class FormValidator {
    constructor(config, form) {
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._errorSelector = config.errorSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._textErrorClass = config.textErrorClass;
        this._form = form;
        this._inputList = form.querySelectorAll(this._inputSelector);
        this._button = form.querySelector(this._submitButtonSelector)
    }

    enableValidation() {
        this._setEventListeners();
    };

    _setEventListeners() {
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkValidity(input);
                this._togglleButtonState();
            })
        })
    }
    _checkValidity(input) {
        const invalidationError = this._form.querySelector(`${this._errorSelector}${input.name}`);
        if (input.validity.valid) {
            this._hideInputError(input, invalidationError)
        } else {
            this._showInputError(input, invalidationError)
        };
    }

    _hideInputError(input, invalidationError) {
        input.classList.remove(this._inputErrorClass);
        invalidationError.textContent = '';
        invalidationError.classList.remove(this._textErrorClass);
    };

    _showInputError(input, invalidationError) {
        input.classList.add(this._inputErrorClass);
        invalidationError.textContent = input.validationMessage;
        invalidationError.classList.add(this._textErrorClass);
    };

    _areAllInputsValid() {
        return Array.from(this._inputList).every(input => input.validity.valid)
    }


    _togglleButtonState() {
        if (this._areAllInputsValid()) {
            this._button.classList.remove(this._inactiveButtonClass)
            this._button.disabled = false
        }
        else {
            this._button.classList.add(this._inactiveButtonClass)
            this._button.disabled = true
        }
    }

    resetFormError() {
        this._inputList.forEach((input => {
            const invalidationError = this._form.querySelector(`${this._errorSelector}${input.name}`);
            this._hideInputError(input, invalidationError);
        }))
        this._togglleButtonState()
    }
}
