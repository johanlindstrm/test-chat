import { Actions } from "react-native-router-flux";
import React, {useRef, useState} from "react";
//imports
import {
  View,
  Text,
  ScrollView,
    Image,
  TextInput, TouchableOpacity,
} from "react-native";


import {ChatDB} from '../clientRDM/Chat'
import Clipboard, {useClipboard} from '@react-native-community/clipboard';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {User} from "../mediators/User";
import {styles} from "../styles/styles"





const clipboardOptions=(text)=> {
    Clipboard.setString('hlooo')
}
const fetchClipboardText=async ()=> {
    return  await Clipboard.getString()
}

const MessageDB=ChatDB.filter((chat)=>chat !==undefined)

const Messenger = (props) => {

    const [isSelectAll,setIsSelectAll]=useState(false)
    const setSelectTextFocus=useRef()
    const [isEnable,setIsEnable]=useState(false)
    const [isClipboard,setIsClipboard]=useState(false)

    return (
        <View>
            {isClipboard ?<View  style={{flexDirection:'row',width:160,marginLeft:80,marginRight:30,padding:6,borderRadius:20,
                backgroundColor:styles.messageContainerChild.backgroundColor,justifyContent:'space-evenly'}}>
               <TouchableOpacity>
                   <Text onPress={()=>{
                       setIsClipboard(false)
                   }}>Copy</Text>
               </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={()=>{
                       setIsSelectAll(true)
                    }}>Select all</Text>
                </TouchableOpacity>
            </View> :null}
            {props.isFrom ?
                <View style={styles.messageContainer}>
                    <View  style={styles.messageContainerChild} >
                        <Image style={{width:40,height:40}} source={require('../assets/user.png')}/>
                        <TouchableOpacity   activeOpacity={.6} onLongPress={()=>{
                            if(isClipboard){
                                setIsClipboard(false)
                            }else {
                                setIsClipboard(true)
                            }
                        }}>
                            <Text ref={setSelectTextFocus}  selectable
                                  style={isSelectAll ?[{color:styles.appBar.backgroundColor,borderRadius:4},styles.messageContainerChildTextMessage]
                                      :styles.messageContainerChildTextMessage}>
                                {props.text.date+'\n'+ props.text.message}
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>:
            <View style={styles.receiverContainer}>
                <View  style={styles.receiverContainerChild}>
                    <Image style={{width:40,height:40}} source={require('../assets/user.png')}/>
                    <View>
                        <Text style={styles.receiverMessageText} >
                            {props.text.date+'\n'+ props.text.message}
                        </Text>
                    </View>

                </View>
            </View>}


        </View>
    )
}

export function Chats () {

  const from=new User('Dan');
    const contactUser=new User('Johan');
    const to=new User('Johan');
   const   [isFrom,setIsFrom]=useState(false)
    let [messageStack,setMessageStack]=useState({ users:[]})
    const   [scrollToView,setScrollToView]=useState()
    const [messageState,setMessageState]=useState((() => {}))
    const [message,setMessage]=useState(from.sendMessage(''))
    let [editorValue,setEditorValue]=useState('')
    const   [count,setCount]=useState(0)
    let renewMessage=from.sendMessage('');
   const AddChat = () => {
        setMessageStack({
            users: [...messageStack.users, <Messenger isFrom={isFrom} key={count} text={renewMessage}/>]
        })
       setCount(count+1);
    }

    const placeholder = "Enter  message:";
    const scrollRef = useRef();
    return (
    <View style={styles.container}>
        <ScrollView ref={scrollRef}
            contentContainerStyle={styles.scrollContainer} style={{width:'100%'}}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    scrollsToTop={scrollToView} onContentSizeChange={scrollToView}>
            <View  />
            <View  />

            {messageStack.users}

        </ScrollView>
        <View  style={styles.chatInputContainer}>

        <View style={styles.chatInputContainerChild}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name={'bars'} size={40}/>
                </TouchableOpacity>
                <TextInput
                    style={styles.inputChat}
                    placeholderTextColor='black'
                    placeholder={placeholder}
                    onChangeText={(text =>  {
                        setEditorValue(text)
                        renewMessage=from.sendMessage(text);
                        setMessage(from.sendMessage(text))
                        setMessageState(() =>{
                        scrollRef.current?.scrollToEnd({
                            x : 0,
                            animated : true
                        });
                    })

                    })}
                value={editorValue} />
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={(event =>{
                    renewMessage=message;
                       setMessage(from.sendMessage(''))
                       if(isFrom){
                           setIsFrom(false)
                           AddChat()
                       }else {
                           setIsFrom(true)
                           AddChat()
                       }
                    renewMessage=from.sendMessage('');
                    setEditorValue('');
                    setTimeout(()=>{
                        scrollRef.current?.scrollToEnd({
                            x : 0,
                            animated : true
                        });

                        clearInterval(this)
                    },10)
                })}>
                    <View style={styles.sendMessage} >
                        <Image name={'send'}  style={styles.sendMessage} source={require('../assets/send-512.webp')}/>
                    </View>

                </TouchableOpacity>
            </View>
        </View>

    </View>

    </View>
);
}



