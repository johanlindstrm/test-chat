// import { Actions } from "react-native-router-flux";
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import React from 'react';
// Theme & Language Scheme import
import schemes from '../Resources/Schemes';
import languageScheme from '../Resources/LangScheme';

// Theme & Language Context import
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LangContext } from '../context/LangContext';

import { styles } from '../styles/styles';

export const Settings = () => {
  const { language, toggleLanguage } = useContext(LangContext);
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: theme.backgroundColor,
        alignItems: 'center',
        padding: 5,
      }}
    >
      <TouchableOpacity
        style={styles.settingBtn}
        onPress={() => {
          toggleLanguage(languageScheme.SV);
        }}
      >
        <Text style={{ fontSize: 22, paddingLeft: 10 }}>
          {language.settingsSV}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingBtn}
        onPress={() => {
          toggleLanguage(languageScheme.EN);
        }}
      >
        <Text style={{ fontSize: 22, paddingLeft: 10 }}>
          {language.settingsEN}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingBtn}
        onPress={() => {
          toggleTheme(schemes.DEF);
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 22, paddingLeft: 10 }}>
            {language.settingsDEF}
          </Text>
        </View>

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
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 22, paddingLeft: 10 }}>
            {language.settingsDRK}
          </Text>
        </View>

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
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 22, paddingLeft: 10 }}>
            {language.settingsMYLI}
          </Text>
        </View>
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
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    paddingRight: 50,
    marginBottom: 10,
  },
});
