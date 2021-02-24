import React, { Component, useState } from "react";
import { Actions, Router, Scene } from "react-native-router-flux";
import { styles } from "../styles/styles";
import { Contacts } from "../screens/Contacts";
import { Messages } from "../screens/Messages";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Text, Modal } from "react-native";
import { View } from "react-native-web";
import SafeAreaView from "react-native-web/dist/exports/SafeAreaView";
import AddToContact from "../screens/AddToContact";

//Route component

export default function Routes() {
  const [isVisible, setIsVisible] = useState(false);
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
          key='Messages'
          titleStyle={styles.scene}
          component={Messages}
          title='Messages'
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
