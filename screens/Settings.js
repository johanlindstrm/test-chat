// import { Actions } from "react-native-router-flux";
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import React from 'react';
import schemes from '../Resources/Schemes';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const Settings = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: theme.backgroundColor,
        alignItems: 'center',
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
            backgroundColor: '#3484ff',
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
            backgroundColor: '#ff8534',
          }}
        ></View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingBtn}
        onPress={() => {
          toggleTheme(schemes.MYLI);
        }}
      >
        <Text style={{ fontSize: 22, marginRight: 20 }}>MYLI Theme</Text>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#00a48a',
          }}
        ></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  settingBtn: {
    width: 300,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    paddingRight: 50,
    marginBottom: 10,
  },
});
