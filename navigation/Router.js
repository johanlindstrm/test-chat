import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions, Router, Scene } from "react-native-router-flux";
import { styles } from "../styles/styles";
import { Messages } from "../screens/Messages";
import { Contacts } from "../screens/Contacts";
import { Chats } from "../screens/Chats";
import { Settings } from "../screens/Settings";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LangContext } from "../context/LangContext";

const goToSettings = function () {
  Actions.Settings();
};
//Route component
export const Routes = () => {
  const { language } = useContext(LangContext);
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
          title={language.contactTitle}
          initial={true}
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
          title={language.chatTitle}
        />
        <Scene
          key='Settings'
          titleStyle={styles.scene}
          component={Settings}
          title={language.settingsTitle}
        />
        <Scene
          key='Chats'
          titleStyle={styles.scene}
          component={Chats}
          title={language.chatTitle}
        />
      </Scene>
    </Router>
  );
};
