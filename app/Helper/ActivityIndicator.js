import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import SafeAreaWrapper from "./SafeAreaView";

const PageLoader = ({ loading }) => {
    return (
        <View style={styles.container}>
            <SafeAreaWrapper>
                <PageLoader
                    animating={loading}
                    color={MD2Colors.red800}
                />
            </SafeAreaWrapper>
        </View>
    );
};

export default ActivityIndicator;

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: "100%",
        height: "100%",
        alignContent: "center",
        justifyContent: "center",
    },
});
