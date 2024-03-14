import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Alert,
    Image,
    Button,
    Platform,
    StatusBar,
    ImageBackground,
    ScrollView,
} from "react-native";
import {
    useDimensions,
    useDeviceOrientation,
} from "@react-native-community/hooks";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelocomeScreen from "./app/screen/WelocomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import RegiserScreen from "./app/screen/RegiserScreen";

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="welcome">
                <Stack.Screen
                    name="welcome"
                    component={WelocomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="view"
                    component={ViewImageScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="register"
                    component={RegiserScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
    },
});
