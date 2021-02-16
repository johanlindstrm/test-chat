import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const testImg = require('../assets/favicon.png');

const DATA = [
  {
    id: 1,
    img: testImg,
    user: 'Test Person',
    type: 'Coach',
    msg: 'lorem ipsum..',
  },
  {
    id: 2,
    img: testImg,
    user: 'Test Person',
    type: 'Familj',
    msg: 'lorem ipsum..',
  },
  {
    id: 3,
    img: testImg,
    user: 'Test Person',
    type: 'Arbete',
    msg: 'lorem ipsum..',
  },
  {
    id: 4,
    img: testImg,
    user: 'Test Person',
    type: 'Coach',
    msg: 'lorem ipsum..',
  },
  {
    id: 5,
    img: testImg,
    user: 'Test Person',
    type: 'Familj',
    msg: 'lorem ipsum..',
  },
  {
    id: 6,
    img: testImg,
    user: 'Test Person',
    type: 'Arbete',
    msg: 'lorem ipsum..',
  },
];

//Alphabetical sort
DATA.sort(function (a, b) {
  var nameA = a.type.toUpperCase(); // ignore upper and lowercase
  var nameB = b.type.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});
console.log(DATA);

const Item = ({ user, msg, img, type }) => (
  <TouchableOpacity activeOpacity={0.7} style={styles.item}>
    <View style={styles.imgContainer}>
      <Image source={img} />
    </View>

    <View style={styles.contactContainer}>
      <Text style={styles.user}>{user}</Text>
      <Text style={styles.message}>{msg}</Text>
    </View>
    <View style={styles.typeContainer}>
      <Text style={styles.title}>{type}</Text>
    </View>
  </TouchableOpacity>
);

export default function Contacts() {
  const renderItem = ({ item }) => (
    <Item user={item.user} msg={item.msg} img={item.img} type={item.type} />
  );

  return (
    <SafeAreaView>
      <FlatList
        style={{ height: '100%' }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: 400,
    backgroundColor: '#f8f8f8',
    padding: 20,
    marginBottom: 5,
  },
  user: {
    fontSize: 16,
  },
  message: {
    fontSize: 16,
    color: '#B3B3B3',
  },

  contactContainer: {
    flex: 1.6,
    paddingLeft: 50,
    // backgroundColor: "red",
  },

  imgContainer: {
    flex: 0.4,
    // backgroundColor: "orange",
  },

  typeContainer: {
    flex: 3,
    // backgroundColor: "green",
    paddingRight: 0,
    height: 20,
  },
});
