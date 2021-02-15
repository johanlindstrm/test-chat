import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Test() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="navigate"
        onPress={() => {
          navigation.navigate('Test2');
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
