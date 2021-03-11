export class ChatRoom {
  static showMessage = function (User:any, message: any) {
    return {
      date: User.getDate(),
      userIcon: User.getUserIcon(),
      user: User.getUserName(),
      message: message,
    };
  };
}
