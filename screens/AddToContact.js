import {Actions} from "react-native-router-flux";
import {
    Text,
    TouchableOpacity,
    ScrollView,
    View,
    TextInput
} from 'react-native';
import React from "react";
import {styles} from "../styles/styles";



export default function AddToContact  () {
    const goToChat = () => {
        Actions.Contacts()
    }
    return (
        <View style={styles.scene}>
            <View style={styles.plusContainer}>
                <Text style={styles.plusTitle}>Add from your contact</Text >
                <Text  style={styles.deviceContact}>
                    <TouchableOpacity style={styles.plusHolder} onPress = {goToChat}>
                        <Text  style={styles.add}>{' + '}</Text>
                    </TouchableOpacity> </Text>
            </View>

        <ScrollView >
        <View style={styles.centeredView}>

            <View style={styles.inputsContainer}>
                <TextInput  editable={true} style={styles.inputs} placeholder={'First name'}/>
                <TextInput editable={true}  style={styles.inputs}  placeholder={'Last name'}/>
                <TextInput editable={true}  style={styles.inputs}  placeholder={'Email'}/>
                <TextInput editable={true} style={styles.inputs}  placeholder={'Cell number'}/>
                <TextInput editable={true}  style={styles.inputs}  placeholder={'address'}/>
                <TextInput editable={true} style={styles.inputs}  placeholder={'Post code'}/>
                <TextInput editable={true}  style={styles.inputs}  placeholder={'State'}/>
                <TextInput editable={true} style={styles.inputs}  placeholder={'Country'}/>
                <View>
                    <TouchableOpacity style={styles.addToContact}>
                        <Text style={styles.addToContactTitle}>Add Contact</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
        </ScrollView>

        </View>

    )
}
