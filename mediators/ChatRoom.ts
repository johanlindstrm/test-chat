import { User } from "./User";
/*
  @class ChatRoom
 */
export class ChatRoom {
  /*
     @showMessage
   */
  static showMessage = function (user:User, message: any) {
    return {
      date: user.getDate(),
      userIcon: user.getUserIcon(),
      user: user.getUserName(),
      message: message,
    };
  };
}
