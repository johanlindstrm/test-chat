import React, { useRef, useState, useContext, useEffect } from "react";
import { Actions } from "react-native-router-flux";
import {
  SafeAreaView,
  View,
  FlatList,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/styles";
import { ThemeContext } from "../context/ThemeContext";
import { LangContext } from "../context/LangContext";
import { Patient } from "../clientRDM/Patient";
import axios from "axios";
import { BCSupport } from "../clientRDM/BCSupport";
let ContactsTemp = [];

// const DATA = [
//   {
//     id: 1,
//     initials: "SJ",
//     firstName: "Olga",
//     lastName: "Johnson",
//     type: "Coach",
//     msg: "lorem ipsum..",
//     time: "09:45",
//   },
//   {
//     id: 2,
//     initials: "PJ",
//     firstName: "Emil",
//     lastName: "Human",
//     type: "Familj",
//     msg: "lorem ipsum..",
//     time: "Igår",
//   },
//   {
//     id: 3,
//     initials: "S",
//     firstName: "Dan",
//     lastName: "Ayettey",
//     type: "Arbete",
//     msg: "lorem ipsum..",
//     time: "22:30",
//   },
//   {
//     id: 4,
//     initials: "P",
//     firstName: "Joseph",
//     lastName: "Blackeburg",
//     type: "Coach",
//     msg: "lorem ipsum..",
//     time: "Söndag",
//   },
//   {
//     id: 5,
//     initials: "A",
//     firstName: "Seth",
//     lastName: "Almqvist",
//     type: "Familj",
//     msg: "lorem ipsum..",
//     time: "10:20",
//   },
//   {
//     id: 6,
//     initials: "AJ",
//     firstName: "Adam",
//     lastName: "Johnson",
//     type: "Arbete",
//     msg: "lorem ipsum..",
//     time: "10:20",
//   },
// ];

const Item = ({ user = {}, setData, msg, initials, time, type, index }) => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LangContext);

  const goToMessages = (index) => {
    console.log(resultsChat);
    Actions.Chats(index);
  };

  return (
    <TouchableOpacity
      onPress={(event) => goToMessages(index)}
      activeOpacity={0.7}
      style={{ ...styles.item, backgroundColor: theme.accentColor }}
    >
      <View style={styles.initalsContainer}>
        <View style={styles.initialsCircle}>
          <Text style={styles.initialsText}>{initials}</Text>
        </View>
      </View>

      <View style={styles.contactContainer}>
        <Text style={{ ...styles.user, color: theme.color }}>{user}</Text>
        <Text style={{ ...styles.user, color: theme.color }}>
          {user.firstName + " " + user.lastName}
        </Text>
        <Text style={styles.message}>{msg}</Text>
      </View>

      <View style={styles.timeContainer}>
        <View>
          <Text style={{ color: theme.color }}>{time}</Text>
        </View>
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

// function fetchContacts() {
//   fetch("http://192.168.0.155:8081/contacts", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then(function (data) {
//       let contacts = data.results;
//       console.log(data);
//       // return contacts.map(function(contact) {
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
// function fetchChat() {
//   fetch("http://192.168.0.155:8081/messages", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((responseJson) => {
//       console.log(responseJson);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

export function Contacts(props) {
  const { theme } = useContext(ThemeContext);
  const [contacts, setContact] = useState([]);
  const [messages, setMessages] = useState([]);

  console.log(contacts);
  useEffect(() => {
    fetch("http://192.168.0.155:8081/contacts")
      .then((response) => response.json())
      .then((json) => setContact(json.BCSupport))
      .catch((error) => console.error(error));
  }, []);

  // Get the names and creating initals
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
        extraData={messages}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ ...styles.item, backgroundColor: theme.accentColor }}
            activeOpacity={0.7}
            onPress={() => {
              console.log(` CONTACT NAME: ${item.name} WITH ID: ${item.id} `);
            }}
          >
            <View style={styles.initalsContainer}>
              <View style={styles.initialsCircle}>
                <Text>{getInitials(item.name)}</Text>
              </View>
            </View>
            <View style={styles.contactContainer}>
              <Text style={styles.user}>{item.name}</Text>
              <Text style={styles.user}>{item.Chat.message[0].message}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text>{item.Chat.message[0].messageTS}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, id) => id.toString()}
      />
    </SafeAreaView>
  );
}
