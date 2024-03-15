import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

const SafeAreaWrapper = ({ children }) => {
    return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
    },
});

export default SafeAreaWrapper;
