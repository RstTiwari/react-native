import { message } from "antd";
import { Camera, CameraType, BarCodeScanner } from "expo-camera";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import { appApi } from "../../Helper/ApiCall";
import SafeAreaWrapper from "../../Helper/SafeAreaView";
import PageLoader from "../../Helper/ActivityIndicator";
export default function Barcode({ navigation }) {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const [value, setValue] = useState("Please Scan ");
    const [scannedItems, setScannedItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const route = useRoute();

    // Access the params object from the route
    const { challanNo } = route.params;

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setValue(data);
        setScannedItems((prev) => [
            ...prev,
            { description: data, hsnCode: "1234", qty: 1, unit: 1 },
        ]);
    };
    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center" }}>
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }
    const appProduct = async () => {
        setLoading(true);

        try {
            const { success, result, message } = await appApi("challan", {
                action: "update",
                value: { challanNo: challanNo, items: scannedItems },
            });
            if (!success) {
                return alert(`${message}`);
            } else {
                alert("Challan Updated");
            }
            navigation.goBack();
        } catch (error) {
            alert(`${error.message}`);
        }
    };

    return (
        <SafeAreaWrapper>
            {!loading ? (
                <View>
                    <Button
                        title="Back"
                        onPress={() => {
                            navigation.navigate("challanList");
                        }}
                    />
                    <ScrollView
                        contentContainerStyle={styles.scrollViewContent}
                    >
                        <Camera
                            style={styles.camera}
                            type={type}
                            autoFocus={true}
                            onBarCodeScanned={
                                scanned ? undefined : handleBarCodeScanned
                            }
                        ></Camera>
                        <View>
                            <Text>{value}</Text>
                            {scanned ? (
                                <Button
                                    title="click to scan Again"
                                    color={"green"}
                                    onPress={() => {
                                        setScanned(null),
                                            setValue("Please Scan");
                                    }}
                                />
                            ) : (
                                ""
                            )}
                        </View>

                        <View style={{ marginTop: 20, border: "1 solid red" }}>
                            <View style={{ paddingBottom: 20 }}>
                                <Text>List of Selected Item</Text>
                            </View>
                            {scannedItems &&
                                scannedItems.map((item, index) => {
                                    return (
                                        <Text key={index}>
                                            {index + 1} = {item.description}
                                        </Text>
                                    );
                                })}
                            <Button
                                title="SUBMIT"
                                onPress={() => appProduct()}
                            />
                        </View>
                    </ScrollView>
                </View>
            ) : (
                <PageLoader loading={loading} />
            )}
        </SafeAreaWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollViewContent: {
        alignItems: "center", // Apply alignment styles here
        justifyContent: "center", // Apply alignment styles here
    },
    camera: {
        height: 150,
        width: 300,
    },
    buttonContainer: {
        flexDirection: "row",
        backgroundColor: "transparent",
        margin: 64,
    },
    button: {
        alignSelf: "flex-end",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
});
