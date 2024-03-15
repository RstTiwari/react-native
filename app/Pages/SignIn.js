import { SafeAreaView, StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import { Button, TextInput, ActivityIndicator } from "react-native-paper";

import SafeAreaWrapper from "../Helper/SafeAreaView";
import color from "../config/color";
import { authApi } from "../Helper/ApiCall";

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const handleLogin = async () => {
        setLoading(true);
        const { success, result, message } = await authApi("login", {
            email,
            password,
        });
        if (success) {
            setLoading(false)
            navigation.navigate("home");
        } else {
            setLoading(false)
            return Alert.alert("Failed", message, {
              text: "OK",
              onPress: () =>{}
          });
        }
    };
    return (
        <SafeAreaWrapper>
            {!loading ? (
                <View style={styles.container}>
                    <View style={styles.signInText}>
                        <Text style={color.text.fontSize}>PLEASE SIGN IN</Text>
                    </View>
                    <View style={styles.signIncontainer}>
                        <TextInput
                            label="Email"
                            style={styles.inputContainer}
                            value={email}
                            onChangeText={(e) => setEmail(e)}
                        />
                    </View>
                    <View style={styles.signIncontainer}>
                        <TextInput
                            label="Password"
                            style={styles.inputContainer}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                    <View style={styles.signIncontainer}>
                        <Button onPress={handleLogin} mode={"contained-tonal"}>
                            SUBMIT
                        </Button>
                    </View>
                </View>
            ) : (
                <ActivityIndicator loading={loading} />
            )}
        </SafeAreaWrapper>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.white,
        height: "100%",
        width: "100%",
        alignItems: "center",
    },
    signInText: {
        marginTop: "20%",
        backgroundColor: color.secondary,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: "5%",
        color: color.primary,
    },
    signIncontainer: {
        marginTop: "10%",
        width: "100%",
    },
    inputContainer: {
        width: "100%",
    },
});
