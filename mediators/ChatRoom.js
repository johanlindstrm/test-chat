
export class ChatRoom{

   static showMessage=function(User, message){
        return {userIcon:User.getUserIcon(),user:User.getUserName(),message:message}
    }


}

