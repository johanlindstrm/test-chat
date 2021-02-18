// import { Actions } from "react-native-router-flux";
import { Button, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import schemes from "../Schemes";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export const Settings = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <View>
      <Button
        title='Theme 1'
        onPress={() => {
          toggleTheme(schemes.MYLI1);
        }}
      />
      <Button
        title='Theme 2'
        onPress={() => {
          toggleTheme(schemes.MYLI2);
        }}
      />
      <Button
        title='Theme 3'
        onPress={() => {
          toggleTheme(schemes.MYLI3);
        }}
      />
    </View>
  );
};
