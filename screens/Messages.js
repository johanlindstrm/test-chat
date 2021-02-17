import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function Messages() {
  let placeholder = 'Enter youre message' + ':';
  return (
    <View style={styles.conntainer}>
      <View style={{ height: '85%', width: '100%' }}>
        <Text>emil</Text>
      </View>
      <KeyboardAvoidingView
        style={{
          height: '15%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            backgroundColor: 'lightgrey',
            width: '90%',
            height: '50%',
            borderRadius: 100,
            marginBottom: 20,

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <ImageBackground
                source={require('../assets/favicon.png')}
                style={{ width: 40, height: 40, marginLeft: 20 }}
              />
            </TouchableOpacity>
            <TextInput
              style={{ marginLeft: 10 }}
              placeholderTextColor="black"
              placeholder={placeholder}
            ></TextInput>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <ImageBackground
                source={require('../assets/favicon.png')}
                style={{ width: 40, height: 40, marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={require('../assets/favicon.png')}
                style={{ width: 40, height: 40, marginRight: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
