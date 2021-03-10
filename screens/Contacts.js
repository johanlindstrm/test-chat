import React, { useRef, useState, useContext, useEffect } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  SafeAreaView,
  View,
  FlatList,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../styles/styles';
import { ThemeContext } from '../context/ThemeContext';
import { LangContext } from '../context/LangContext';
import { Patient } from '../clientRDM/Patient';
import axios from 'axios';
import { BCSupport } from '../clientRDM/BCSupport';

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
          {user.firstName + ' ' + user.lastName}
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
        width: '100%',
        backgroundColor: '#d3d3d3',
      }}
    />
  );
};

export function Contacts({ index }) {
  const { theme } = useContext(ThemeContext);
  const [contacts, setContact] = useState([]);
  const test = JSON.stringify(contacts);

  useEffect(() => {
    // fetch("http://192.168.0.155:8081/contacts")
    //   // handle the response
    //   .then((response) => response.json())
    //   .then((json) => setContact(json.BCSupport))
    //   // handle the error
    //   .catch((error) => {
    //     console.error("Error: ", error);
    //   });
    fetch('http://127.0.0.1:8081/contacts', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setContact(json.BCSupport);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const goToMessages = (index) => {
    console.log();
    Actions.Chats(index);
  };

  // Get the names and creating initals
  const getInitials = function (string) {
    let names = string.split(' '),
      initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  return (
    <SafeAreaView>
      <FlatList
        style={{ height: '100%', backgroundColor: theme.backgroundColor }}
        ItemSeparatorComponent={FlatListItemSeparator}
        data={contacts}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ ...styles.item, backgroundColor: theme.accentColor }}
            activeOpacity={0.7}
            onPress={(event) => goToMessages(index)}
            onPressOut={() => {
              console.log(` CONTACT NAME: ${item.name} WITH ID: ${item.id} `);
            }}
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
        )}
        keyExtractor={(item, id) => id.toString()}
      />
    </SafeAreaView>
  );
}
