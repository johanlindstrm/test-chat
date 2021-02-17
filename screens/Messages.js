import {Actions} from "react-native-router-flux";
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import React from "react";

export const Messages = () => {
    const goToChat = () => {
        Actions.Chats()
    }
    return (
        <TouchableOpacity style = {{ margin: 128 }} onPress = {goToChat}>
            <Text>This is Chat</Text>
        </TouchableOpacity>
    )
}

