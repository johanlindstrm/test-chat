import { Actions } from "react-native-router-flux";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  placeholder,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import React from "react";
import { ScrollView } from "react-native";

export const Chats = () => {
  const goToHome = () => {
    Actions.Chat();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ height: "85%", width: "100%" }}></View>
      </ScrollView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 4,
          borderTopColor: "rgb(229,231,232)",
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "lightgrey",
            width: "96%",
            height: "auto",
            padding: 4,
            borderRadius: 100,
            margin: 6,

            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity>
              <ImageBackground
                source={require("../assets/favicon.png")}
                style={{ width: 40, height: 40, marginLeft: 4 }}
              />
            </TouchableOpacity>
            <TextInput
              editable={true}
              style={{ borderRadius: 2, margin: 2, height: 40, width: 200 }}
              placeholderTextColor='black'
            />
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
      </View>
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
