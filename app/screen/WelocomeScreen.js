import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import color from "../config/color";

const backGroundImage = require("../assets/background.jpg");
const welocomeLogo = require("../assets/logo-red.png");
export default function WelocomeScreen({navigation}) {
  const signIn = ()=>{
    return navigation.navigate("view")
  }
  const register = ()=>{
    return navigation.navigate("register")
  }
    return (
        <ImageBackground source={backGroundImage} style={styles.background}>
            <View style={styles.logoContainer}>
                <Image source={welocomeLogo} style={styles.logo} />
                <Text>Sell What You Dont Need</Text>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={signIn}>
             <Text style ={styles.primaryText}>SIGNIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton} onPress={register}>
             <Text style ={styles.primaryText}>REGISTER</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: color.primary,
        alignItems:"center",
        justifyContent:"center"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: color.secondary,
        alignItems:"center",
        justifyContent:"center",
    },
    logo: {
        width: 100,
        height: 100,
    },
    primaryText:{
      fontSize:25,
      color:color.white
    }
});
