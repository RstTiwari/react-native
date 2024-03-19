import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Navbar from "../components/Home/Navbar";
import Barcode from "../components/Scanner/BarcodeScanner";
import Challan from "../components/Inventory/Challanlist";
import SafeAreaWrapper from "../Helper/SafeAreaView";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaWrapper>
            <View  style ={styles.challan}>
            <Challan  navigation={navigation}/>
            </View>
        </SafeAreaWrapper>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    challan:{
        marginTop:100
    }
});
