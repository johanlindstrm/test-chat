import { Actions } from "react-native-router-flux";
import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import schemes from "../Schemes";
import { ThemeContext } from "../Context/ThemeContext";

export const Chats = () => {
  //const [theme, setTheme] = useState(schemes.MYLI.backgroundColor);
  const { theme, toggleTheme } = useContext(ThemeContext);

  let placeholder = "Enter youre message" + ":";
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.backgroundColor,
      }}
    >
      <View style={{ height: "85%", width: "100%" }}></View>
      <KeyboardAvoidingView
        style={{
          height: "15%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            height: "50%",
            borderRadius: 100,
            marginBottom: 20,

            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <ImageBackground
                source={require("../assets/favicon.png")}
                style={{ width: 40, height: 40, marginLeft: 20 }}
              />
            </TouchableOpacity>
            <TextInput
              style={{ marginLeft: 10 }}
              placeholderTextColor={theme.color}
              placeholder={placeholder}
            ></TextInput>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <ImageBackground
                source={require("../assets/favicon.png")}
                style={{ width: 40, height: 40, marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={require("../assets/favicon.png")}
                style={{ width: 40, height: 40, marginRight: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
