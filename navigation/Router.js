import React, { Component } from "react";
import { Image, Text } from "react-native";
import { Actions, Router, Scene } from "react-native-router-flux";
import { styles } from "../styles/styles";
import { Messages } from "../screens/Messages";
import { Contacts } from "../screens/Contacts";
import { Chats } from "../screens/Chats";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Settings } from "../screens/Settings";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const goToSettings = function () {
  Actions.Settings();
};
//Route component
export const Routes = () => {
  const { theme } = useContext(ThemeContext);
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
          title='Contacts'
          initial={true}
          swipeEnabled={true}
          renderLeftButton={
            <TouchableOpacity onPress={goToSettings}>
              <Image
                source={require("../assets/settingsIcon.png")}
                style={styles.settingsIcon}
              />
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
          key='Settings'
          titleStyle={styles.scene}
          component={Settings}
          title='Settings'
        />
        <Scene
          key='Chats'
          titleStyle={styles.scene}
          component={Chats}
          title='Chats'
        />
      </Scene>
    </Router>
  );
};
