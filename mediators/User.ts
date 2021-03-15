import { ChatRoom } from "./ChatRoom";

/*
 @Class UsER
 */
export class User {


  //Instance variable
    private userIcon: any;
    private text: string='';
    private userName: string | undefined;

    //Constructor
  constructor(userName?: string,userIcon?: string) {
      this.userIcon=userIcon
      this.userName = userName;
  }
  // Accessors
  setUserName(userName: string) {
    this.userName = userName;
  }
  getUserName() {
    return this.userName;
  }
  setUserIcon(userIcon: any) {
    this.userIcon = userIcon;
  }
  getUserIcon() {
    return this.userIcon;
  }
  setUserText(text: string) {
    this.text = text;
  }
  getUserText() {
    return this.text;
  }
  getDate() {
    return (
      new Date().toLocaleDateString() + "  " + new Date().toLocaleTimeString()
    );
  }
  sendMessage = (message: any) => {
    return ChatRoom.showMessage(this, message);
  };
}
