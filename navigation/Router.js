import React from "react";
import { TouchableOpacity,Text } from "react-native";
import { Actions, Router, Scene } from "react-native-router-flux";
import { styles } from "../styles/styles";

// Screens
import {Chats, userAppBarDetails} from "../screens/Chats";
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
  const goToSettings = function () {
    Actions.Settings({ title: language.settingsTitle });
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
            <TouchableOpacity
                style={{padding:16}}
                onPress={goToSettings}>
              <Text
                style={{  marginLeft: 10,fontSize:20,color:'white',fontWeight:'bold' }}
              >⋮</Text>
            </TouchableOpacity>
          }

        />

        <Scene
          key='Chats'
          titleStyle={styles.scene}
          component={Chats}
          title={"Chats"}
          renderTitle={userAppBarDetails}
        />

        <Scene
          key='Settings'
          titleStyle={styles.scene}
          component={Settings}
          title={"Settings"}
        />

      </Scene>
    </Router>
  );
}
