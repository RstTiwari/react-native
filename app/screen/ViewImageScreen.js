import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";

import color from "../config/color";
const image = require("../assets/chair.jpg");

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.delteIcon}></View>

            <Image resizeMode="contain" source={image} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        backgroundColor: color.primary,
        height: 50,
        width: 50,
        position: "absolute",
        left: 30,
        top: 50,
    },
    delteIcon: {
        backgroundColor: color.secondary,
        height: 50,
        width: 50,
        top: 50,
        right: 30,
        position: "absolute",
    },
    container: {
        backgroundColor: color.black,
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
});
