import React, {useState, useContext, useEffect } from "react";
import { Actions } from "react-native-router-flux";
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/styles";
import { ThemeContext } from "../context/ThemeContext";
import { LangContext } from "../context/LangContext";
import { UseFetch } from "../facades/UseFetch";


const Item = ({data:{theme, item, Chat, getInitials}}) => {


  const goToMessages = (data) => {
    Actions.Chats(data);
  };

  return (
      <TouchableOpacity
          style={{ ...styles.item, backgroundColor: theme.accentColor }}
          activeOpacity={0.7}
          onPress={(event) =>
              goToMessages({
                data: {
                  userDetails:{userName:item.name,
                    lastSeen: new Date().toLocaleDateString()+' '+item.Chat.message[0].messageTS,
                    image:''},
                  index: item.id,
                  chats: Chat.Message.filter(
                      (messages) =>
                          messages.SenderUserId ===
                          item.Chat.message[0].senderUserId
                  ),
                },
              })
          }
      >
        <View style={styles.initalsContainer}>
          <View style={styles.initialsCircle}>
            <Text>{getInitials(item.name)}</Text>
          </View>
        </View>
        <View style={styles.contactContainer}>
          <Text style={{ ...styles.user, color: theme.color }}>
            {item.name}
          </Text>
          <Text style={{ ...styles.user, color: theme.color }}>
            {item.Chat.message[0].message}
          </Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={{ color: theme.color }}>
            {item.Chat.message[0].messageTS}
          </Text>
        </View>
      </TouchableOpacity>
  );
};

const FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 0.5,
        width: "100%",
        backgroundColor: "#d3d3d3",
      }}
    />
  );
};

export function Contacts() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LangContext);

  const [contacts, setContact] = useState([]);
  const [messages, setMessages] = useState(0);
  const [id, setId] = useState(0);
  const fetch = new UseFetch();

  useEffect(() => {

    fetch
      .useFetch("http://192.168.0.2:8081/contacts", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((json) => {
        setContact(json.BCSupport);
      })
      .catch((error) => {
        console.error(error);
      });

    fetch
      .useFetch("http://192.168.0.2:8081/messages/" + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((json) => {
        setMessages(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const { Chat } = messages;



  // Get the names and creating initials
  const getInitials = function (string) {
    let names = string.split(" "),
      initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  return (
    <SafeAreaView>
      <FlatList
        style={{ height: "100%", backgroundColor: theme.backgroundColor }}
        ItemSeparatorComponent={FlatListItemSeparator}
        data={contacts}
        renderItem={({ item }) => <Item data={{theme, item, Chat, getInitials}}/>}
        keyExtractor={(item, id) => id.toString()}
      />
    </SafeAreaView>
  );
}
