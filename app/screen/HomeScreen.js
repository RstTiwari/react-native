import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Navbar from "../components/Home/Navbar";
import Sidebar from "../components/Home/Sidebar";
import BarcodeScanner from "../components/Scanner/BarcodeScanner";

const HomeScreen = () => {
    return (
        <>
            <Navbar />    
            <BarcodeScanner/>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
