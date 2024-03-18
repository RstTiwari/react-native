import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import BarcodeScanner from "../Scanner/BarcodeScanner";

const SingleChallan = ({ challanNo ,navigation}) => {
    console.log(challanNo, "challanNo");
    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate("scanItem")}>ADD ITEM</Button>
        </View>
    );
};

export default SingleChallan;

const styles = StyleSheet.create({
    container: {
        flex: 5, // Adjust flex to accommodate DataTable properly
        alignItems: "center",
    },
});
