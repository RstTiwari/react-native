import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import { Appbar, Menu, Divider, PaperProvider } from "react-native-paper";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Sidebar from "./Sidebar";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const showMenu = () => {
        console.log("isDrwaeropen");
        setIsDrawerOpen(!isDrawerOpen);
        console.log(isDrawerOpen);
    };
    return (
        <>
            <Appbar.Header style={styles.topNavbar}>
                <Appbar.Action icon="menu" onPress={() => showMenu()} />
                <Appbar.Content title="Myfac8ry" style={styles.appbarContent} />
                {/* Use a custom icon for the search button */}
                <Appbar.Action
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={size}
                        />
                    )}
                    onPress={() => console.log("Search pressed")}
                />
            </Appbar.Header>
            <PaperProvider>
                <View
                    style={{
                        paddingTop: 50,
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <Menu visible={true} onDismiss={showMenu}>
                        <Menu.Item onPress={() => {}} title="Item 1" />
                        <Menu.Item onPress={() => {}} title="Item 2" />
                        <Divider />
                        <Menu.Item onPress={() => {}} title="Item 3" />
                    </Menu>
                </View>
            </PaperProvider>
        </>
    );
};

export default Navbar;

const styles = StyleSheet.create({
    topNavbar: {
        // Change the background color of the top navigation bar
    },
    appbarContent: {
        alignItems: "center", // Center the title horizontally
    },
});
