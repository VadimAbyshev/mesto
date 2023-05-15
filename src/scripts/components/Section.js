export default class Section{
    constructor({items, renderer}, containerSelector){
        this._container = document.querySelector(containerSelector);
        this._initialCard = items;
        this.renderer = renderer;
    }

    addCardFromArray(){
        this._initialCard.forEach(element => {
            this.renderer(element)
        });
    }

    addItem(elementDom){
      this._container.prepend(elementDom)  
    }
}