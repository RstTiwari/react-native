import * as React from "react";
import { useState, useRef } from "react";
import {
    Button,
    DrawerLayoutAndroid,
    Text,
    StyleSheet,
    View,
} from "react-native";
import { Appbar, Menu, Divider, PaperProvider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MenuFoldOutlined } from "@ant-design/icons";
import Sidebar from "./Sidebar";

const Navbar = ({ navigation }) => {
    const drawer = useRef(null);
    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={250}
            drawerPosition={"left"}
            renderNavigationView={() => <Sidebar navigation={navigation} />}
        >
            <Appbar.Header style={styles.topNavbar}>
                <Appbar.Content title="Myfac8ry" />
                <Appbar.Action
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="menu"
                            color={color}
                            size={size}
                        />
                    )}
                    onPress={() => drawer.current.openDrawer()}
                />
            </Appbar.Header>
        </DrawerLayoutAndroid>
    );
};

export default Navbar;

const styles = StyleSheet.create({
    topNavbar: {
        backgroundColor: "white",
        // Change the background color of the top navigation bar
    },
    appbarContent: {
        alignItems: "center", // Center the title horizontally
    },
});
