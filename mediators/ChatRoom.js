
export class ChatRoom{

   static showMessage=function(User, message){
        return {date:User.getDate(),userIcon:User.getUserIcon(),user:User.getUserName(),message:message}
    }


}

