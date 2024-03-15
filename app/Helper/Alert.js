import { StyleSheet, Text, View ,Alert} from 'react-native'
import React from 'react'
import { message } from 'antd';


const AlertHandler ={
    success:(message)=>{
     return Alert.alert("Success", message, {
         text: "OK",
         onPress: () =>{}
     });
    },
    fail:(message)=>{
        return Alert.alert("Failed", message, {
            text: "OK",
            onPress: () =>{}
        }); 
    }
}

export default AlertHandler