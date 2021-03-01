import React, { useRef, useState, useContext, useEffect } from 'react';
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
import { LangContext } from '../context/LangContext';
import { Response } from '../JSON/GetContacts.json';
import { Response2 } from '../JSON/GetContacts2.json';

const DATA = [
  {
    id: 1,
    initials: 'SJ',
    user: 'Adam Johnson',
    type: 'Coach',
    msg: 'lorem ipsum..',
    time: '09:45',
  },
  {
    id: 2,
    initials: 'PJ',
    user: 'Petra Johnson',
    type: 'Familj',
    msg: 'lorem ipsum..',
    time: 'Igår',
  },
  {
    id: 3,
    initials: 'S',
    user: 'Sara Johnson',
    type: 'Arbete',
    msg: 'lorem ipsum..',
    time: '22:30',
  },
  {
    id: 4,
    initials: 'P',
    user: 'Peter Johnson',
    type: 'Coach',
    msg: 'lorem ipsum..',
    time: 'Söndag',
  },
  {
    id: 5,
    initials: 'A',
    user: 'Adam Johnson',
    type: 'Familj',
    msg: 'lorem ipsum..',
    time: '10:20',
  },
  {
    id: 6,
    initials: 'AJ',
    user: 'Adam Johnson',
    type: 'Arbete',
    msg: 'lorem ipsum..',
    time: '10:20',
  },
];

//Alphabetical sort, based on type { arbete, coach, familj }
DATA.sort(function (a, b) {
  var typeA = a.type.toUpperCase(); // ignore upper and lowercase
  var typeB = b.type.toUpperCase(); // ignore upper and lowercase
  if (typeA < typeB) {
    return -1;
  }
  if (typeA > typeB) {
    return 1;
  }
  // names must be equal
  return 0;
});

const Item = ({ user }) => {
  //console.log('emil', Response.BCSupport[0].BCSupportType.Description);
  //console.log('emil', Response.Chat[0].Message[0].Message);
  console.log('johan', user);
  console.log('här');

  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LangContext);

  const goToMessages = () => {
    Actions.Messages({ title: language.messageTitle });
  };

  return (
    <TouchableOpacity
      onPress={goToMessages}
      activeOpacity={0.7}
      style={{ ...styles.item, backgroundColor: theme.accentColor }}
    >
      <View style={styles.initalsContainer}>
        <View style={styles.initialsCircle}>
          <Text style={styles.initialsText}>{initials}</Text>
        </View>
      </View>

      <View style={styles.contactContainer}>
        <Text style={{ ...styles.user, color: theme.color }}>emil{user}</Text>
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
  const renderItem = ({ item }) => <Text>emil{item}</Text>;

  if (!DATA.length) {
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
        //data={DATA}
        data={Response}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
