import React, { useRef, useState, useContext } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../styles/styles';
import { ThemeContext } from '../context/ThemeContext';
import { Patient } from '../clientRDM/Patient';
import { BCSupport } from '../clientRDM/BCSupport';
import { DATA } from './Dummy data.json';
let ContactsTemp = [];
/* const DATA = [
  {
    id: 1,
    initials: "SJ",
    firstName: "Olga",
    lastName: "Johnson",
    type: "Coach",
    msg: "lorem ipsum..",
    time: "09:45",
  },
  {
    id: 2,
    initials: "PJ",
    firstName: "Emil",
    lastName: "Human",
    type: "Familj",
    msg: "lorem ipsum..",
    time: "Igår",
  },
  {
    id: 3,
    initials: "S",
    firstName: "Dan",
    lastName: "Ayettey",
    type: "Arbete",
    msg: "lorem ipsum..",
    time: "22:30",
  },
  {
    id: 4,
    initials: "P",
    firstName: "Joseph",
    lastName: "Blackeburg",
    type: "Coach",
    msg: "lorem ipsum..",
    time: "Söndag",
  },
  {
    id: 5,
    initials: "A",
    firstName: "Seth",
    lastName: "Almqvist",
    type: "Familj",
    msg: "lorem ipsum..",
    time: "10:20",
  },
  {
    id: 6,
    initials: "AJ",
    firstName: "Adam",
    lastName: "Johnson",
    type: "Arbete",
    msg: "lorem ipsum..",
    time: "10:20",
  },
]; */

//Alphabetical sort, based on type { arbete, coach, familj }
DATA.sort(function (compA, compB) {
  const typeA = compA.type.toUpperCase(); // ignore upper and lowercase
  const typeB = compB.type.toUpperCase(); // ignore upper and lowercase
  if (typeA < typeB) {
    return -1;
  }
  if (typeA > typeB) {
    return 1;
  }
  // names must be equal
  return 0;
});

const Item = ({ user = {}, msg, initials, time, type, index }) => {
  const goToMessages = (index) => {
    Actions.Chats(index);
  };

  const { theme } = useContext(ThemeContext);
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

export function Contacts(props) {
  const { theme } = useContext(ThemeContext);

  const renderItem = ({ item, index }) => {
    return (
      <Item
        user={{ firstName: item.firstName, lastName: item.lastName }}
        msg={item.message}
        initials={
          item.firstName.split('').shift() +
          '' +
          item.lastName.split('').shift()
        }
        time={item.messageTs}
        type={item.type}
        index={index}
      />
    );
  };

  //const contact=patientData[0]
  //const messages=patientData[2]

  DATA.map((data, index) => {
    if (DATA.length > Patient.Patient.length) {
      Patient.Patient.push({
        id: data.id,
        userID: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
      });
      Patient.Messages.Messages.push({
        id: data.id,
        messageTs: data.time,
        chatId: data.id,
        message: data.msg,
        senderUserId: data.id,
      });
    }
  });

  Patient.Patient.map((data, key) => {
    ContactsTemp[key] = {
      id: key,
      firstName: data.firstName,
      lastName: data.lastName,
      userId: key,
      chatId: Patient.Messages.Messages[key].chatId,
      messageTs: Patient.Messages.Messages[key].messageTs,
      message: Patient.Messages.Messages[key].message,
      senderUserId: Patient.Messages.Messages[key].senderUserId,
    };
  });

  if (!ContactsTemp.length) {
    return (
      <Text style={{ textAlign: 'center', marginTop: 20 }}>
        Inga Meddelanden 💬
      </Text>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        style={{ height: '100%', backgroundColor: theme.backgroundColor }}
        ItemSeparatorComponent={FlatListItemSeparator}
        data={ContactsTemp}
        renderItem={renderItem}
        keyExtractor={(item, id) => id.toString()}
      />
    </SafeAreaView>
  );
}
