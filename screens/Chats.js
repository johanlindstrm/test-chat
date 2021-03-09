import React, { useContext, useEffect, useRef, useState } from "react";
//imports
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import shortid from "shortid";
import { ChatDB } from "../clientRDM/Chats";
import Clipboard, { useClipboard } from "@react-native-community/clipboard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { User } from "../mediators/User";
import { styles } from "../styles/styles";
import { Patient } from "../clientRDM/Patient";
import { schemes } from "../Resources/Schemes";
import { color } from "react-native-reanimated";
import { counter } from "@fortawesome/fontawesome-svg-core";
import { Picker } from "emoji-mart-native";
import { LangContext } from "../context/LangContext";
import { ThemeContext } from "../context/ThemeContext";

const clipboardOptions = (text) => {
  Clipboard.setString("hlooo");
};
const fetchClipboardText = async () => {
  return await Clipboard.getString();
};

// const Emos = () => {
//   import EmojiBoard from "react-native-emoji-board";
//   const [show, setShow] = useState(false);
//   const onClick = (emoji) => {
//     console.log(emoji);
//   };

//   return (
//     <View>
//       <TouchableOpacity onPress={() => setShow(!show)}>
//         <Text>click here</Text>
//       </TouchableOpacity>
//       <EmojiBoard showBoard={show} onClick={onClick} />
//     </View>
//   );
// };

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
            width: 160,
            marginLeft: 80,
            marginRight: 30,
            padding: 6,
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
        <View style={[styles.messageContainer]}>
          <View style={styles.messageContainerChild}>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../assets/user.png")}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onLongPress={() => {
                if (isClipboard) {
                  setIsClipboard(false);
                } else {
                  setIsClipboard(true);
                }
              }}
            >
              <Text
                ref={setSelectTextFocus}
                selectable
                style={
                  isSelectAll
                    ? [
                        {
                          color: styles.appBar.backgroundColor,
                          borderRadius: 4,
                        },
                        styles.messageContainerChildTextMessage,
                      ]
                    : styles.messageContainerChildTextMessage
                }
              >
                {props.text.date + "\n" + props.text.message}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.receiverContainer}>
          <View
            style={[
              styles.receiverContainerChild,
              { backgroundColor: theme.bottomChatBar },
            ]}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../assets/user.png")}
            />
            <View>
              <Text style={[{ color: theme.chatText }]}>
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
  const to = new User("Johan");
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
  /*
//  const elementIndex = index.data === undefined ? 0 : index.data;
  const contactJoinChatRoom = Patient.Patient[elementIndex];
  Patient.Messages.Messages.push({
    id: elementIndex + 1,
    messageTs: from.getDate(),
    chatId: elementIndex + 1,
    message: "You are awesome",
    senderUserId: elementIndex,
  });
  let renew = [];
  const contactMessageRoom = Patient.Messages.Messages.filter((msg) =>
    renew.push(from.sendMessage(msg.message))
  );
  //   console.log(renew);

  useEffect(() => {
    if (contactJoinChatRoom) {
      let renewMessage = [
        // from.sendMessage("hello"),
        // from.sendMessage("hello world"),
      ];
      //AddChat()
      let counter = 1;
      if (renewMessage.length > counter) {
        setMessageStack({
          users: [
            ...messageStack.users,
            renewMessage.map((renewMessage) => {
              counter++;
              return (
                <Messenger isFrom={isFrom} key={counter} text={renewMessage} />
              );
            }),
          ],
        });
      }

      // contactMessageRoom.map(msg=> renewMessage=from.sendMessage(msg.message))

      //setMessage(from.sendMessage())

      setMessageState(() => {
        scrollRef.current?.scrollToEnd({
          x: 0,
          animated: true,
        });
      });

      //setIsFrom(false)
      //AddChat()
    }
  }, []);

   */

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
