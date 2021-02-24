import React, { Component, useState } from "react";
import { Actions, Router, Scene } from "react-native-router-flux";
import { styles } from "../styles/styles";
import { Contacts } from "../screens/Contacts";
import { TouchableOpacity } from "react-native";
import { Text} from "react-native";
import AddToContact from "../screens/AddToContact";
import {Chats} from "../screens/Chats";

//Route component

export default function Routes() {
  const goToAddToContact = function () {
    Actions.AddToContact();
  };
  return (
    <Router>
      <Scene
        key='root'
        tintColor={styles.scene.color}
        activeTintColor={"red"}
        swipeEnabled={true}
        navigationBarStyle={styles.appBar}
      >
        <Scene
          key='Contacts'
          activeTintColor={styles.scene}
          titleStyle={styles.scene}
          component={Contacts}
          title='Contacts'
          initial={true}
          swipeEnabled={true}
          renderRightButton={
            <TouchableOpacity style={{ margin: 12 }} onPress={goToAddToContact}>
              <Text style={styles.addIconAppBar}>{" + "}</Text>
            </TouchableOpacity>
          }
        />

        <Scene
          key='Chats'
          titleStyle={styles.scene}
          component={Chats}
          title='Chats'
        />

        <Scene
          key='AddToContact'
          titleStyle={styles.scene}
          component={AddToContact}
          title='AddContact'
        />
      </Scene>
    </Router>
  );
}
