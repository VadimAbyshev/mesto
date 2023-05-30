(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function n(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var o=function(){function t(e,r,o,i,u){var c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"_deleteCardElement",(function(){c._openDelete(c,c._cardId)})),n(this,"_toggleLike",(function(){c._changeLike(c._likeElement,c._cardId)})),n(this,"_handleOpenFigurePopup",(function(){c._openFigurePopup(c._cardData)})),this._myId=e.myid,this._ownerId=e.owner._id,this._likes=e.likes,this._cardData=e,this._changeLike=u,this._cardId=e._id,this._name=e.name,this._link=e.link,this._templateSelector=r,this._openFigurePopup=o,this._likesLength=e.likes.length,this._openDelete=i,this._cloneElement=this._getTemplateClone(),this._imgElement=this._cloneElement.querySelector(".element__image"),this._likeElement=this._cloneElement.querySelector(".element__like-button"),this._bucketElement=this._cloneElement.querySelector(".element__bucket-button"),this._titleElement=this._cloneElement.querySelector(".element__title"),this._counter=this._cloneElement.querySelector(".element__like-counter")}var r,o;return r=t,(o=[{key:"setLikes",value:function(t){this._likeElement.classList.toggle("element__like-button_active"),this._counter.textContent=t.length}},{key:"_setEventListeners",value:function(){this._imgElement.addEventListener("click",this._handleOpenFigurePopup),this._likeElement.addEventListener("click",this._toggleLike),this._bucketElement.addEventListener("click",this._deleteCardElement)}},{key:"_getTemplateClone",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_changesVisibleTrashButton",value:function(){this._myId===this._ownerId?this._bucketElement.style.display="block":this._bucketElement.style.display="none"}},{key:"_checkLikes",value:function(){var t=this;this._likes.forEach((function(e){e._id!==t._myId||t._likeElement.classList.add("element__like-button_active")})),this._counter.textContent=this._likesLength}},{key:"removeCardElement",value:function(){this._cloneElement.remove(),this._cloneElement=null}},{key:"createCard",value:function(){return this._imgElement.src=this._link,this._imgElement.alt=this._name,this._titleElement.textContent=this._name,this._changesVisibleTrashButton(),this._checkLikes(),this._setEventListeners(),this._cloneElement}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}(),i={formSelector:".popup__form",inputSelector:".form__text-input",submitButtonSelector:".popup__save-button",errorSelector:".popup__invlid-",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_invalid",textErrorClass:"popup__error_visible"},u=".popup_edit-profile";function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._errorSelector=e.errorSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._textErrorClass=e.textErrorClass,this._form=n,this._inputList=n.querySelectorAll(this._inputSelector),this._button=n.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkValidity(e),t._togglleButtonState()}))}))}},{key:"_checkValidity",value:function(t){var e=this._form.querySelector("".concat(this._errorSelector).concat(t.name));t.validity.valid?this._hideInputError(t,e):this._showInputError(t,e)}},{key:"_hideInputError",value:function(t,e){t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._textErrorClass)}},{key:"_showInputError",value:function(t,e){t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._textErrorClass)}},{key:"_areAllInputsValid",value:function(){return Array.from(this._inputList).every((function(t){return t.validity.valid}))}},{key:"_togglleButtonState",value:function(){this._areAllInputsValid()?(this._button.classList.remove(this._inactiveButtonClass),this._button.disabled=!1):(this._button.classList.add(this._inactiveButtonClass),this._button.disabled=!0)}},{key:"resetFormError",value:function(){var t=this;this._inputList.forEach((function(e){var n=t._form.querySelector("".concat(t._errorSelector).concat(e.name));t._hideInputError(e,n)})),this._togglleButtonState()}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function p(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var h=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"_handleCloseButton",(function(){n.close()})),p(this,"_closePopupEsc",(function(t){"Escape"===t.key&&n.close()})),p(this,"_closePopupOverlayClick",(function(t){t.target===t.currentTarget&&n.close()})),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closePopupEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closePopupEsc)}},{key:"setEventListeners",value:function(){this._popupCloseButton.addEventListener("click",this._handleCloseButton),this._popup.addEventListener("mousedown",this._closePopupOverlayClick)}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function g(t){var e=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===m(e)?e:String(e)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(n);if(r){var o=d(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return b(t)}(this,t)});function i(t){var e,n,r,u,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=b(n=o.call(this,t)),c=function(t){n._popupImage.src=t.link,n._popupImage.alt=t.name,n._captionPopupImage.textContent=t.name,v((e=b(n),d(i.prototype)),"open",e).call(e)},(u=g(u="open"))in r?Object.defineProperty(r,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[u]=c,n._popupImage=n._popup.querySelector(".popup__figure-image"),n._captionPopupImage=n._popup.querySelector(".popup__figure-caption"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(h);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var w=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._renderer=e}var e,n;return e=t,(n=[{key:"addItemFromArray",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItemPrepend",value:function(t){this._container.prepend(t)}},{key:"addItem",value:function(t){this._container.append(t)}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var j=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameAuthor=document.querySelector(e.nameAuthor),this._nameDescription=document.querySelector(e.nameDescription),this._profileAvatar=document.querySelector(e.profileAvatar)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameAuthor.textContent,description:this._nameDescription.textContent}}},{key:"setUserInfo",value:function(t){var e=t.username,n=t.description,r=t.avatar;this._profileAvatar.src=r,this._nameAuthor.textContent=e,this._nameDescription.textContent=n}},{key:"setid",value:function(t){this._id=t}},{key:"getid",value:function(){return this._id}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},T.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitFunction=e,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".form__text-input"),n._submitButton=n._form.querySelector(".form__save-button"),n._defaultButtonText=n._submitButton.textContent,n}return e=u,(n=[{key:"close",value:function(){T(x(u.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var t=this;return this._values={},this._inputList.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setupDefaultText",value:function(){this._submitButton.textContent=this._defaultButtonText}},{key:"setEventListeners",value:function(){var t=this;T(x(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton.textContent="".concat(t._submitButton.textContent,"..."),t._submitFunction(t._getInputValues())}))}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,U(r.key),r)}}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function D(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},F.apply(this,arguments)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}function z(t,e,n){return(e=U(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function U(t){var e=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===R(e)?e:String(e)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(r);if(o){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return D(t)}(this,t)});function u(t,e){var n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),z(D(r=i.call(this,t)),"open",(function(t,e){F((n=D(r),V(u.prototype)),"open",n).call(n),r._item=t,r._itemId=e,console.log(r._itemId)})),z(D(r),"getElement",(function(){return r._item})),r._submitFunction=e,r._form=r._popup.querySelector(".popup__form"),r._submitButton=r._form.querySelector(".form__save-button"),r._defaultButtonText=r._submitButton.textContent,r}return e=u,(n=[{key:"setupDefaultText",value:function(){this._submitButton.textContent=this._defaultButtonText}},{key:"setEventListeners",value:function(){var t=this;F(V(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton.textContent="".concat(t._submitButton.textContent,"..."),t._submitFunction(t._itemId)}))}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var M=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject}},{key:"getInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.description})}).then(this._checkResponse)}},{key:"setNewAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._checkResponse)}},{key:"addCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.title,link:t.link})}).then(this._checkResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"delLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"delCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var G=document.querySelector(".profile__button-add"),K=document.querySelector(".form_add-card"),Q=document.querySelector(".profile__button-edit"),W=document.querySelector(".profile__button-avatar"),X=(document.querySelector(".element__bucket-button"),document.querySelector(".form_edti-avatar")),Y=document.querySelector(".form_edit-profile"),Z=new M({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"977f385f-236c-404d-bdba-a8b618ca5abd","Content-Type":"application/json"}}),tt=new N(".popup_delete-card",(function(t){Z.delCard(t).then((function(t){tt.getElement().removeCardElement(),tt.close()})).catch((function(t){return console.error("Ошибка удаления карточки ".concat(t))})).finally((function(){return tt.setupDefaultText()}))}));tt.setEventListeners();var et=new j({nameAuthor:".profile__name",nameDescription:".profile__description",profileAvatar:".profile__avatar"}),nt=new B(u,(function(t){Z.setUserInfo(t).then((function(t){et.setUserInfo({username:t.name,description:t.about,avatar:t.avatar}),nt.close()})).catch((function(t){return console.error("Ошибка редактирования профиля ".concat(t))})).finally((function(){return nt.setupDefaultText()}))})),rt=new B(".popup_add-card",(function(t){Z.addCard(t).then((function(t){console.log(et.getid()),t.myid=et.getid(),at.addItemPrepend(ct(t)),rt.close()})).catch((function(t){return console.error("Ошибка создания карточки ".concat(t))})).finally((function(){return rt.setupDefaultText()}))})),ot=new h(u),it=new S(".popup_open-card"),ut=new B(".popup_edit-avatar",(function(t){Z.setNewAvatar(t).then((function(t){console.log(t),et.setUserInfo({username:t.name,description:t.about,avatar:t.avatar}),ut.close()})).catch((function(t){return console.error("Ошибка редактирования автара ".concat(t))})).finally((function(){return ut.setupDefaultText()}))}));function ct(t){var e=new o(t,"#element-template",it.open,tt.open,(function(t,n){t.classList.contains("element__like-button_active")?Z.delLike(n).then((function(t){console.log(t),e.setLikes(t.likes)})).catch((function(t){return console.error("Ошибка дизлайка ".concat(t))})):Z.addLike(n).then((function(t){console.log(t),e.setLikes(t.likes)})).catch((function(t){return console.error("Ошибка добавления лайка ".concat(t))}))}));return e.createCard()}ut.setEventListeners();var at=new w((function(t){at.addItem(ct(t))}),".elements"),lt=new l(i,Y);lt.enableValidation();var st=new l(i,K);st.enableValidation();var ft=new l(i,X);ft.enableValidation(),ot.setEventListeners(),rt.setEventListeners(),nt.setEventListeners(),it.setEventListeners(),W.addEventListener("click",(function(){ft.resetFormError(),ut.open()})),Q.addEventListener("click",(function(){lt.resetFormError(),nt.setInputValues(et.getUserInfo()),ot.open()})),G.addEventListener("click",(function(){st.resetFormError(),rt.open()})),Promise.all([Z.getInfo(),Z.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];i.forEach((function(t){return t.myid=o._id})),et.setUserInfo({username:o.name,description:o.about,avatar:o.avatar}),et.setid(o._id),at.addItemFromArray(i)})).catch((function(t){return console.error("Ошибка загрузки профиля ".concat(t))}))})();