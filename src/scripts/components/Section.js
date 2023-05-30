export default class Section{
    constructor(renderer, containerSelector){
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
    }

    addItemFromArray(item){
        item.forEach(element => {
            this._renderer(element)
        });
    }

    addItemPrepend(elementDom){
        this._container.prepend(elementDom)  
    }
    addItem(elementDom){
      this._container.append(elementDom)  
    }
}