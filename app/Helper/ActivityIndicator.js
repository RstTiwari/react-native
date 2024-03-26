import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import SafeAreaWrapper from "./SafeAreaView";

const PageLoader = ({ loading ,text}) => {
    return (
        <View style={styles.container}>
            <SafeAreaWrapper>
                <ActivityIndicator
                    animating={loading}
                    color={MD2Colors.red800}
                />
                <Text>{text}</Text>
            </SafeAreaWrapper>
        </View>
    );
};

export default PageLoader;

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: "100%",
        height: "100%",
        alignContent: "center",
        justifyContent: "center",
    },
});
