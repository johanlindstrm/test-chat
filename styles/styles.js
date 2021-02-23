import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  messageContainer:{
      flexDirection:'row',alignSelf:'flex-end',
      justifyContent:'space-evenly',
  },

  appBar: {
    backgroundColor: "#3484ff",
    paddingTop: 20,
    height: 79,
  },
  scene: {
    color: "white",
  },
  tintColor: {
    color: "orange",
  },
  addIconAppBar:{
    color:'white',
    fontSize:26,
    marginRight:26
  },
  iconDefaultSize:{
    fontSize:16,
  },
 addButton:{
    padding:4,
   backgroundColor:"#3484ff",
   borderRadius:20,
 },
  iconColor:{
    fontSize:26,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  inputs: {
    width: 290,
    padding:8,
    marginTop: 6,
    marginBottom: 6,
    borderWidth:1,
    borderColor: "#2196F3",
    borderRadius:4,
  },
  inputsContainer: {
    flex:1,

  },

  deviceContact: {
    flexDirection:'row',
    margin: 1,
    justifyContent: 'space-evenly',
    paddingTop: 6,
    paddingBottom:6,
      alignContent:'center',
      alignSelf:'center',
    alignItems:'center'
  },
  plusHolder: {
    backgroundColor:'#2196F3',
    marginLeft:20,
    borderRadius:20,
    paddingTop:6,
    paddingBottom: 6,
    paddingLeft:8,
    paddingRight:8
  },
  add: {
    color:'white'
  },
    plusContainer: {
      flexDirection: 'row',
        marginTop:4,
        alignContent:'center',
        alignSelf:'center',
        alignItems:'center'

    },
    plusTitle: {
    margin:10,

    },
    addToContact: {
      width:110,
        textAlign:'center',
        padding:12,
        borderRadius:4,
      backgroundColor:'#2196F3'
    },
    addToContactTitle:{
      color:'white'
    },
    messageContainerChild:{
      flexDirection:'row',
        marginBottom:10,
        margin:6,
        borderRadius:40,
        backgroundColor:'rgb(242,243,245)',padding:4
  },
    messageContainerChildText: {
      flex:1,color:'black',borderRadius:20,
        margin:4,
        padding:4
    },
    messageContainerChildTextMessage: {
      flex:1,color:'black',
        borderRadius:20,
        width:220,
        flexWrap:'wrap',
        margin:4,padding:4
    },
    scrollContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'

    },
    receiverContainer: {
      flexDirection:'row',alignSelf:'flex-start',flexWrap:'wrap'
    },
    receiverContainerChild: {
      flexDirection:'row',marginBottom:10,margin:6,
        borderRadius:40,
        backgroundColor:'rgb(242,243,245)',
        padding:4,
        flexWrap:'wrap'
    },
    receiverMessage: {
      flex:1,color:'black',
        borderRadius:20,margin:4,padding:10
    },
    chatInputContainer: {

    borderTopColor:'rgb(238,239,239)',
        borderTopWidth: 1,
    paddingTop:2,

    },
    chatInputContainerChild: {

    backgroundColor: "rgb(242,243,245)",
        marginTop:4,
    height: 50,
    borderRadius: 100,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    }


});
