import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, DataTable } from "react-native-paper";
import SafeAreaWrapper from "../../Helper/SafeAreaView";
import Barcode from "../Scanner/BarcodeScanner";
import { appApi } from "../../Helper/ApiCall";
import ActivityIndicator from "../../Helper/ActivityIndicator";

const Challan = ({ navigation }) => {
    const [addItem, setAddItem] = useState(false);
    const [challanNo, setChallanNo] = useState(null);
    const [ChallanData, setChallanData] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleOpenChallan = (item, navigation) => {
        setAddItem(true);
        setChallanNo(item.challanNumber);
    };

    const fetchingChallanList = async () => {
        setLoading(true);
        const { success, result, message } = await appApi("challan", {
            action: "list",
            value: {},
        });
        if (!success) {
            return alert(`${message}`);
        }
        setChallanData(result);
        setLoading(false);
    };
    const onBackClick =()=>{
        setAddItem(false)

    }
    useEffect(() => {
        fetchingChallanList();
    }, []);
    return (
        <SafeAreaWrapper>
            {!loading ? (
                <>
                    {!addItem ? (
                        <View>
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>Challan#</DataTable.Title>
                                    <DataTable.Title>Customer</DataTable.Title>
                                    <DataTable.Title>Status</DataTable.Title>

                                    <DataTable.Title>Add Item</DataTable.Title>
                                </DataTable.Header>

                                {ChallanData.map((item) => (
                                    <DataTable.Row
                                        key={item.challanNumber}
                                        style={styles.rowContent}
                                    >
                                        <DataTable.Cell>
                                            {item.challanNumber}
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            {item.customer.customerName}
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            {"DRAFT"}
                                        </DataTable.Cell>
                                        <DataTable.Cell>
                                            <Button
                                                onPress={() =>
                                                    handleOpenChallan(
                                                        item,
                                                        navigation
                                                    )
                                                }
                                            >
                                                {/* Use onPress instead of title */}
                                                ADD
                                            </Button>
                                        </DataTable.Cell>
                                    </DataTable.Row>
                                ))}
                            </DataTable>
                        </View>
                    ) : (
                        <Barcode
                            navigation={navigation}
                            challanNo={challanNo}
                            onBackClick ={onBackClick}
                        />
                    )}
                </>
            ) : (
                <ActivityIndicator />
            )}
        </SafeAreaWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Adjust flex to accommodate DataTable properly
    },
    dataTableContainer: {
        flex: 1, // Ensure the DataTable takes up all available space within the container
        maxHeight: "80%",
    },
    rowContent: {
        flexDirection: "row", // Ensure content is laid out horizontally
        alignItems: "center", // Align content vertically in the center
        justifyContent: "space-between", // Distribute content evenly along the row
    },
});

export default Challan;
