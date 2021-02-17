import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'
import {styles} from "../styles/styles";
import {Messages} from "../screens/Messages";
import {Contacts} from "../screens/Contacts";
import {Chats} from "../screens/Chats";


//Route component
export const Routes = () => (
    <Router >

        <Scene  key = "root" tintColor={styles.scene.color}  activeTintColor={'red'} swipeEnabled={true} navigationBarStyle={styles.appBar} >

            <Scene key = "Contacts"   activeTintColor={styles.scene} titleStyle={styles.scene}  component = {Contacts} title = "Contacts" initial = {true} swipeEnabled={true}/>
            <Scene key = "Messages" titleStyle={styles.scene}  component = {Messages} title = "Messages" />
            <Scene key = "Chats"  titleStyle={styles.scene}  component = {Chats} title = "Charts" />
        </Scene>
    </Router>
)






