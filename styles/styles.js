import { StyleSheet } from 'react-native';
import {schemes} from "../Resources/Schemes";
export const styles = StyleSheet.create({
  settingBtn: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    paddingRight: 50,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#f8f8f8',
    padding: 20,
    // marginBottom: 5,
  },
  user: {
    fontSize: 16,
  },
  message: {
    fontSize: 16,
    color: '#B3B3B3',
  },

  contactContainer: {
    flex: 1,
    paddingLeft: 40,
    // backgroundColor: "red",
    justifyContent: 'center',
  },

  initalsContainer: {
    flex: 0.3,
    // backgroundColor: "orange",
    alignItems: 'center',
    justifyContent: 'center',
  },

  initialsCircle: {
    backgroundColor: '#d8d8d8',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: '#1FC6A5',
    borderWidth: 3,
  },

  initialsText: {
    fontSize: 20,
    color: '#707070',
  },

  typeContainer: {
    flex: 3,
    backgroundColor: 'green',
    paddingRight: 0,
    height: 20,
  },

  timeContainer: {
    // backgroundColor: "red",
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  messageContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-evenly',
  },

  appBar: {
    backgroundColor: '#3484ff',
    paddingTop: 20,
    height: 79,
  },
  scene: {
    color: 'white',
  },
  tintColor: {
    color: 'orange',
  },
  addIconAppBar: {
 width: 40,height:40,borderRadius:40,margin:8

  },
  iconDefaultSize: {
    fontSize: 16,
  },
  addButton: {
    padding: 4,
    backgroundColor: '#3484ff',
    borderRadius: 20,
  },
  iconColor: {
    fontSize: 26,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  inputs: {
    width: 290,
    padding: 8,
    marginTop: 6,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 4,
  },
  inputsContainer: {
    flex: 1,
  },

  deviceContact: {
    flexDirection: 'row',
    margin: 1,
    justifyContent: 'space-evenly',
    paddingTop: 6,
    paddingBottom: 6,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  plusHolder: {
    backgroundColor: '#2196F3',
    marginLeft: 20,
    borderRadius: 20,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 8,
    paddingRight: 8,
  },
  add: {
    color: 'white',
  },
  plusContainer: {
    flexDirection: 'row',
    marginTop: 4,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  plusTitle: {
    margin: 10,
  },
  addToContact: {
    width: 110,
    textAlign: 'center',
    padding: 12,
    borderRadius: 4,
    backgroundColor: '#2196F3',
  },
  addToContactTitle: {
    color: 'white',
  },
  messageContainerChild: {
    flexDirection: 'row',
    marginBottom: 10,

    margin: 6,
    borderRadius: 40,
    backgroundColor: 'rgb(242,243,245)',
    padding: 4,
  },
  messageContainerChildText: {
    flex: 1,
    color: 'black',
    borderRadius: 20,
    margin: 4,
    padding: 4,
  },
  messageContainerChildTextMessage: {
    flex: 1,
    color: 'black',
    borderRadius: 20,
    width: 220,
    flexWrap: 'wrap',
    margin: 4,
    padding: 4,
  },
  scrollContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  receiverContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
  },
  receiverContainerChild: {
    flexDirection: 'row',
    marginBottom: 10,
    margin: 6,
    borderRadius: 40,
    backgroundColor: 'rgb(242,243,245)',
    padding: 10,
    paddingLeft:16,
    paddingRight:16,
    flexWrap: 'wrap',
  },
  receiverMessage: {
    flex: 1,
    color: 'black',
    borderRadius: 20,
    margin: 4,
    padding: 10,
  },
  chatInputContainer: {
    borderTopColor: 'rgb(238,239,239)',
    borderTopWidth: 1,
    paddingTop: 2,
  },
  chatInputContainerChild: {
    backgroundColor: 'rgb(242,243,245)',
    marginTop: 4,
    height: 50,
    borderRadius: 100,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputChat: {
    width: '74%',
    margin: 4,
    marginRight: 4,
    marginLeft: 10,
    alignSelf: 'center',
  },
  sendMessage: {
    width: 40,
    height: 30,
    marginLeft: -4,
  },
  emoji: {
    width: 30,
    margin:4,
    borderRadius:20,
    borderColor:'rgb(237,238,237)',
    borderWidth:2,
    height: 30,
  },
  appBarLabel: {
    color:'white',
    marginTop:10,
      fontSize:13,
  },
    messageFont: {
      fontSize:17,
    },
    unread: {

        borderWidth:1,
        borderRadius:100,
        width:22,height:22,
        borderColor:'lightgray'
    }

});
