// import { Actions } from "react-native-router-flux";
import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { schemes } from "../colorSchemes/Schemes";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { styles } from "../styles/styles";


export const Settings =function () {
    const  {toggleTheme,theme}  = useContext(ThemeContext);

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: theme.backgroundColor,
        alignItems: "center",
        paddingTop: 100,
      }}
    >
      <TouchableOpacity
        style={styles.settingBtn}
        onPress={() => {
          toggleTheme(schemes.DEF);
        }}
      >
        <Text style={{ fontSize: 22, marginRight: 20 }}>Default Theme</Text>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#3484ff",
          }}
        ></View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingBtn}
        onPress={() => {
         toggleTheme(schemes.DRK);
        }}
      >
        <Text style={{ fontSize: 22, marginRight: 20 }}>Dark Theme</Text>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#ff8534",
          }}
        ></View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingBtn}
        onPress={() => {
         // toggleTheme(schemes.MYLI);
        }}
      >
        <Text style={{ fontSize: 22, marginRight: 20 }}>MYLI Theme</Text>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#00a48a",
          }}
        ></View>
      </TouchableOpacity>
    </View>
  );
};
