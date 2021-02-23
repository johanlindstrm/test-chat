import {ChatRoom} from "./ChatRoom";

export class User{

    constructor(userName) {
        this.userName=userName
    }
     setUserName(userName){
        this.userName=userName;
     }
    getUserName(){
       return  this.userName;
    }
    setUserIcon(userIcon){
        this.userIcon=userIcon;
    }
    getUserIcon(){
        return  this.userIcon;
    }
    setUserText(text){
        this.text=text;
    }
    getUserText(){

        return  this.text;
    }
     sendMessage=function(message){
       return   ChatRoom.showMessage(this,message)
    }
}

