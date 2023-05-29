export default class UserInfo{
    constructor(configInfo){
        this._nameAuthor = document.querySelector(configInfo.nameAuthor);
        this._nameDescription = document.querySelector(configInfo.nameDescription);
        this._profileAvatar = document.querySelector(configInfo.profileAvatar)
    }

    getUserInfo(){
        return {name:this._nameAuthor.textContent , description:this._nameDescription.textContent}
    }

    setUserInfo({username, description, avatar}){
        this._profileAvatar.src = avatar;
        this._nameAuthor.textContent = username;
        this._nameDescription.textContent = description;
    }
}