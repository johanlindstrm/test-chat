import React, {useContext, useEffect, useRef, useState} from "react";
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View,} from "react-native";
import shortid from "shortid";
import Clipboard from "@react-native-community/clipboard";
import {User} from "../mediators/User";
import {styles} from "../styles/styles";

import {Picker} from "emoji-mart-native";

import {LangContext} from "../context/LangContext";
import {ThemeContext} from "../context/ThemeContext";

const clipboardOptions = (text) => {
  Clipboard.setString("hlooo");
};
const fetchClipboardText = async () => {
  return await Clipboard.getString();
};
export function userAppBarDetails(navigation) {
  const {data}=navigation
  const {userDetails}=data
  const {lastSeen,userName,image}=userDetails

  const iconCheck=image !==''? require('../assets/user.png'):require('../assets/user.png')

  return(   <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
    <TouchableOpacity  onPress={(event => event)}>
      <Image style={styles.addIconAppBar}  source={iconCheck}/>
    </TouchableOpacity>
    <Text style={styles.appBarLabel}>{userName+'\nlast seen '+lastSeen}</Text>

  </View>)
}
const Messenger = (props) => {
  const { language } = useContext(LangContext);
  const { theme } = useContext(ThemeContext);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const setSelectTextFocus = useRef();
  const [isEnable, setIsEnable] = useState(false);
  const [isClipboard, setIsClipboard] = useState(false);

  return (
    <View>
      {isClipboard ? (
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            borderRadius: 20,
            backgroundColor: styles.messageContainerChild.backgroundColor,
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity>
            <Text
              onPress={() => {
                setIsClipboard(false);
              }}
            >
              Copy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              onPress={() => {
                setIsSelectAll(true);
              }}
            >
              Select all
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {props.isFrom ? (
              <View style={styles.messageContainer}>
                <View
                    style={[
                      styles.receiverContainerChild,
                      {backgroundColor: 'rgb(242,243,245)' },
                    ]}
                >
                  <View>
                    <Text style={[{ color: '#242329'},styles.messageFont]}>
                      {props.text.date + "\n" + props.text.message}
                    </Text>
                  </View>
                </View>
              </View>

      ) : (
        <View style={[styles.receiverContainer]}>
          <View
            style={[
              styles.receiverContainerChild,
              { backgroundColor: theme.bottomChatBar },
            ]}
          >
            <View>
              <Text style={[{ color: theme.chatText},styles.messageFont]}>
                {props.text.date + "\n" + props.text.message}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export function Chats(props) {
  const { index, chats } = props.data;

  const from = new User("Dan");
  const contactUser = new User("Johan");
  const to = new User("Joan");
  const [isFrom, setIsFrom] = useState(false);

  let [messageStack, setMessageStack] = useState({ users: [] });
  const [scrollToView, setScrollToView] = useState();
  const [messageState, setMessageState] = useState(() => {});
  const [message, setMessage] = useState(from.sendMessage(""));
  let [editorValue, setEditorValue] = useState("");
  let [counter, setCounter] = useState(0);
  const [sendersMessageCounter, setSendersMessageCounter] = useState(0);
  const [isEmosVisible, setIsEmosVisible] = useState(false);
  let renewSendersMessage = [];
  let renewOwnersMessage = [];
  const icon='\'../assets/240px-Emoji_u1f610.svg.png\''
  const { language } = useContext(LangContext);

  const AddChat = (isFrom, renewMessage) => {
    setMessageStack({
      users: [
        ...messageStack.users,
        renewMessage.map((renewMessage) => {
          return (
            <Messenger
              isFrom={isFrom}
              key={shortid.generate()}
              text={renewMessage}
            />
          );
        }),
      ],
    });
  };

  const placeholder = language.placeholderText;
  const scrollRef = useRef();

  useEffect(() => {
    setMessage(from.sendMessage(""));
    setEditorValue("");

    if (sendersMessageCounter !== chats.length) {
      renewSendersMessage = chats.map((chats) => {
        setSendersMessageCounter(++counter);
        return from.sendMessage(chats.Message);
      });

      AddChat(false, renewSendersMessage);
    }
  }, []);
  setTimeout(() => {
    scrollRef.current?.scrollToEnd({
      x: 0,
      animated: true,
    });

    clearInterval(this);
  }, 10);
  const textInputRef = useRef();
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.scrollContainer}
        style={{ width: "100%" }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollsToTop={scrollToView}
        onContentSizeChange={scrollToView}
      >
        <View />
        <View />
        {messageStack.users}
      </ScrollView>
      {isEmosVisible ? (
        <Picker
          title='Pick your emoji…'
          emoji='point_up'
          onSelect={(selected) => {
            setEditorValue(selected.native);
            setMessage(from.sendMessage(selected.native));
            if (isEmosVisible) {
              setIsEmosVisible(false);
            } else setIsEmosVisible(true);
          }}
        />
      ) : null}
      <View style={styles.chatInputContainer}>
        <View style={styles.chatInputContainerChild}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                if (isEmosVisible) {
                  setIsEmosVisible(false);
                } else setIsEmosVisible(true);
              }}
            >
              <Image
                style={styles.emoji}
                source={require("../assets/240px-Emoji_u1f610.svg.png")}
              />
            </TouchableOpacity>
            <TextInput
              editable={true}
              style={styles.inputChat}
              placeholderTextColor='black'
              placeholder={placeholder}
              onChangeText={(text) => {
                setEditorValue(text);
                setMessage(from.sendMessage(text));
                setMessageState(() => {
                  scrollRef.current?.scrollToEnd({
                    x: 0,
                    animated: true,
                  });
                });
              }}
              value={editorValue}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={(event) => {
                renewOwnersMessage = [message];
                AddChat(true, renewOwnersMessage);
                setMessage(from.sendMessage(""));
                setEditorValue("");

                setTimeout(() => {
                  scrollRef.current?.scrollToEnd({
                    x: 0,
                    animated: true,
                  });

                  clearInterval(this);
                }, 10);
              }}
            >
              <View style={styles.sendMessage}>
                <Image
                  name={"send"}
                  style={styles.sendMessage}
                  source={require("../assets/send-512.webp")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
