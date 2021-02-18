// import { Actions } from "react-native-router-flux";
import { Button, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import schemes from "../Schemes";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export const Settings = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <View style={{ height: "100%", backgroundColor: theme.backgroundColor }}>
      <Button
        title='Theme DEFAULT'
        onPress={() => {
          toggleTheme(schemes.DEF);
        }}
      />
      <Button
        title='Theme DARK'
        onPress={() => {
          toggleTheme(schemes.DRK);
        }}
      />
      <Button
        title='Theme MYLI'
        onPress={() => {
          toggleTheme(schemes.MYLI);
        }}
      />
    </View>
  );
};
