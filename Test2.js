import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Test2() {
  return (
    <View style={styles.container}>
      <Text>HEllo</Text>
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
