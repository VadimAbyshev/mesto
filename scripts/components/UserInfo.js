export default class UserInfo{
    constructor(configInfo){
        this._nameAuthor = document.querySelector(configInfo.nameAuthor);
        this._nameDescription = document.querySelector(configInfo.nameDescription)
    }

    getUserInfo(){
        return {name:this._nameAuthor.textContent , description:this._nameDescription.textContent}
    }

    setUserInfo(dataUser){
        this._nameAuthor.textContent = dataUser.name;
        this._nameDescription.textContent = dataUser.description;
    }
}