import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import React, {useEffect, useState} from "react";
import {Text,View,Modal} from "react-native";
import { styles } from "../styles/styles";
export const AddContactModal=(props)=>{

    let visibility=props.isVisible===undefined ? false:props.isVisible

    const [modalVisible, setModalVisible] = useState(visibility);
    console.log('hold ',modalVisible)
    useEffect(()=>{
        setModalVisible(modalVisible)
        //console.log(modalVisible)
    },[])

    return (
        <View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

            </View>

        </View>

    );
}

/*
*/
