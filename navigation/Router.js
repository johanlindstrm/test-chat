import React, { Component, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Actions, Router, Scene } from "react-native-router-flux";
import { styles } from "../styles/styles";
import { FontAwesome } from "@expo/vector-icons";
import { Text, Modal } from "react-native";
import { View } from "react-native-web";
import SafeAreaView from "react-native-web/dist/exports/SafeAreaView";
import AddToContact from "../screens/AddToContact";

// Screens
import { Messages } from "../screens/Messages";
import { Contacts } from "../screens/Contacts";
import { Settings } from "../screens/Settings";

// Theme & Language Context import
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LangContext } from "../context/LangContext";

//Route component

export default function Routes() {
  const { language } = useContext(LangContext);
  const { theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);
  const goToAddToContact = function () {
    Actions.AddToContact();
  };
  const goToSettings = function () {
    Actions.Settings();
  };
  return (
    <Router>
      <Scene
        key='root'
        tintColor={styles.scene.color}
        activeTintColor={"red"}
        swipeEnabled={true}
        navigationBarStyle={{
          ...styles.appBar,
          backgroundColor: theme.header,
        }}
      >
        <Scene
          key='Contacts'
          activeTintColor={styles.scene}
          titleStyle={styles.scene}
          component={Contacts}
          title={language.contactTitle}
          initial={true}
          renderLeftButton={
            <TouchableOpacity onPress={goToSettings}>
              <Image
                source={require("../assets/settingsIcon.png")}
                style={{ width: 25, height: 25, marginLeft: 30 }}
              />
            </TouchableOpacity>
          }
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
          title={language.messageTitle}
        />

        <Scene
          key='Settings'
          titleStyle={styles.scene}
          component={Settings}
          title={language.settingsTitle}
        />
        <Scene
          key='AddToContact'
          titleStyle={styles.scene}
          component={AddToContact}
          title='Add Contact'
        />
      </Scene>
    </Router>
  );
}
