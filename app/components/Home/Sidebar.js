// Sidebar.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SafeAreaWrapper from "../../Helper/SafeAreaView";
import { Divider, List } from "react-native-paper";

const Sidebar = ({ navigation }) => {
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };
    return (
        <SafeAreaWrapper>
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Dashboard</Text>
                    <Divider />
                </View>
                <List.Accordion title="Sales and Marketing">
                    <List.Item title="Customer" />
                    <List.Item title="Quotation" />
                    <List.Item title="Lead" />
                </List.Accordion>
                <List.Accordion title="Accounts">
                    <List.Item title="Invoice" />
                    <List.Item title="Payments" />
                    <List.Item title="Expesnes" />
                </List.Accordion>
                <List.Accordion title="Inventory">
                    <List.Item
                        title="Delivery Challan"
                        onPress={() => navigateToScreen("challanList")}
                    />
                </List.Accordion>
            </View>
        </SafeAreaWrapper>
    );
};

export default Sidebar; // Make sure to export the Sidebar component



const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingLeft: 20,
        zIndex: 1000,
        backgroundColor: "#fff",
        width: 250, // Set the width of the sidebar
    },
    text: {
        color: "#000",
        fontSize: 20,
    },
});