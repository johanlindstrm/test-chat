import React, {useEffect} from "react";
import { Actions } from "react-native-router-flux";


import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import {AddContactModal} from "./Model";

const DATA = [
  {
    id: 1,
    initials: "SJ",
    user: "Adam Johnson",
    type: "Coach",
    msg: "lorem ipsum..",
    time: "09:45",
  },
  {
    id: 2,
    initials: "PJ",
    user: "Petra Johnson",
    type: "Familj",
    msg: "lorem ipsum..",
    time: "Igår",
  },
  {
    id: 3,
    initials: "S",
    user: "Sara Johnson",
    type: "Arbete",
    msg: "lorem ipsum..",
    time: "22:30",
  },
  {
    id: 4,
    initials: "P",
    user: "Peter Johnson",
    type: "Coach",
    msg: "lorem ipsum..",
    time: "Söndag",
  },
  {
    id: 5,
    initials: "A",
    user: "Adam Johnson",
    type: "Familj",
    msg: "lorem ipsum..",
    time: "10:20",
  },
  {
    id: 6,
    initials: "AJ",
    user: "Adam Johnson",
    type: "Arbete",
    msg: "lorem ipsum..",
    time: "10:20",
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


const Item = ({ user, msg, initials, time, type }) => {
  const goToMessages = () => {
    Actions.Chats();
  };
  return (
    <TouchableOpacity
      onPress={goToMessages}
      activeOpacity={0.7}
      style={styles.item}
    >
      <View style={styles.initalsContainer}>
        <View style={styles.initialsCircle}>
          <Text style={styles.initialsText}>{initials}</Text>
        </View>
      </View>

      <View style={styles.contactContainer}>
        <Text style={styles.user}>{user}</Text>
        <Text style={styles.message}>{msg}</Text>
      </View>

      <View style={styles.timeContainer}>
        <View>
          <Text>{time}</Text>
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


  export function Contacts(props) {

    const renderItem = ({item}) => (
        <Item
            user={item.user}
            msg={item.msg}
            initials={item.initials}
            time={item.time}
            type={item.type}
        />
    );

    if (!DATA.length) {
      return (
          <Text style={{textAlign: "center", marginTop: 20}}>
            Inga Meddelanden 💬
          </Text>
      );
    }

    return (
        <SafeAreaView>
          <FlatList
              style={{height: "100%", backgroundColor: "#f8f8f8"}}
              ItemSeparatorComponent={FlatListItemSeparator}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
          />

          {

            <AddContactModal isVisible={props.isVisible}/>
          }
        </SafeAreaView>
    );
  }



const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#f8f8f8",
    padding: 20,
    // marginBottom: 5,
  },
  user: {
    fontSize: 16,
  },
  message: {
    fontSize: 16,
    color: "#B3B3B3",
  },

  contactContainer: {
    flex: 1,
    paddingLeft: 40,
    // backgroundColor: "red",
    justifyContent: "center",
  },

  initalsContainer: {
    flex: 0.3,
    // backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },

  initialsCircle: {
    backgroundColor: "#d8d8d8",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderColor: "#1FC6A5",
    borderWidth: 3,
  },

  initialsText: {
    fontSize: 20,
    color: "#707070",
  },

  typeContainer: {
    flex: 3,
    backgroundColor: "green",
    paddingRight: 0,
    height: 20,
  },

  timeContainer: {
    // backgroundColor: "red",
    flex: 0.3,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
