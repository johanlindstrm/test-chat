import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Test from './Test';
import Test2 from './Test2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test">
        <Stack.Screen
          name="Test"
          component={Test}
          options={{
            title: <MessageHeader />,
            headerStyle: { backgroundColor: '#3484ff' },
          }}
        />
        <Stack.Screen
          name="Test2"
          component={Test2}
          options={{
            title: <HeaderTitle />,
            headerStyle: { backgroundColor: '#3484ff' },
            headerLeft: () => <CustomHeader />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const HeaderTitle = () => {
  let MessageName = 'Adam Johansson';
  let UserInitials = 'AD';
  return (
    <View style={styles.container}>
      <View style={styles.userInitialsView}>
        <Text style={styles.userInitials}>{UserInitials}</Text>
      </View>
      <Text style={styles.messageName}>{MessageName}</Text>
    </View>
  );
};

const MessageHeader = () => {
  let headerTitle = 'Meddelande';
  return <Text style={styles.messageHeaderText}>{headerTitle}</Text>;
};

const CustomHeader = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Test')}>
      <AntDesign
        style={styles.backButton}
        name="left"
        size={24}
        color="white"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    marginLeft: 20,
    marginBottom: 10,
  },
  messageHeaderText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  messageName: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1,
    marginLeft: 5,
  },
  userInitialsView: {
    backgroundColor: 'grey',
    height: 45,
    width: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  userInitials: {
    color: 'white',
    fontSize: 20,
    letterSpacing: 3,
    marginLeft: 4,
  },
});
