import { StyleSheet, Platform, StatusBar } from "react-native";
import {
    useDimensions,
    useDeviceOrientation,
} from "@react-native-community/hooks";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import WelocomeScreen from "./app/screen/WelocomeScreen";
import HomeScreen from "./app/screen/HomeScreen";


/**
 * Pages
 */
import SignIn from "./app/Pages/SignIn";
import { useEffect, useState } from "react";

const Stack = createStackNavigator();
export default function App() {
    const [token, setToken] = useState(null);
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem("token");
            if (value !== null) {
                setToken(value);
            }
        } catch (e) {}
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                {token ? (
                    <>
                        <Stack.Screen
                            name="home"
                            component={HomeScreen}
                            options={{ headerShown: false }}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name="welcome"
                            component={WelocomeScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="signin"
                            component={SignIn}
                            options={{ headerShown: false }}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
    },
});
