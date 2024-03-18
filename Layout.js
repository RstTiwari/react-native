import { StyleSheet, View } from "react-native";
import React from "react";
import Navbar from "./app/components/Home/Navbar";

const Layout = (Component) => {
    const ChildComponent = ({ navigation }) => {
        return (
            <View style={styles.container}>
                <Navbar navigation={navigation} />
                <View style={styles.content}>
                    <Component navigation={navigation} />
                </View>
            </View>
        );
    };
    return ChildComponent;
};

export default Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        zIndex: 1,
    },
});
