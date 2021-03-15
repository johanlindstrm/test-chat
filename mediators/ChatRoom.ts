import { User } from "./User";

export class ChatRoom {
  static showMessage = function (user:User, message: any) {
    return {
      date: user.getDate(),
      userIcon: user.getUserIcon(),
      user: user.getUserName(),
      message: message,
    };
  };
}
