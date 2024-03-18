import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, DataTable } from "react-native-paper";
import { ChallanData } from "../../../Data/Challan";
import SafeAreaWrapper from "../../Helper/SafeAreaView";

const Challan = ({ navigation }) => {
    return (
            <View style={styles.container}>
                <DataTable style = {styles.dataTableContainer}>
                    <DataTable.Header>
                        <DataTable.Title>Challan#</DataTable.Title>
                        <DataTable.Title>Status</DataTable.Title>
                        <DataTable.Title>Open</DataTable.Title>
                    </DataTable.Header>

                    {ChallanData.map((item) => (
                        <DataTable.Row key={item.challanNo} style={styles.rowContent}>
                            <DataTable.Cell>{item.challanNo}</DataTable.Cell>
                            <DataTable.Cell>{item.status}</DataTable.Cell>
                            <DataTable.Cell>
                                <Button
                                    onPress={() =>
                                        handleOpenChallan(item, navigation)
                                    }
                                >
                                    {/* Use onPress instead of title */}
                                    OPEN
                                </Button>
                            </DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </DataTable>
            </View>
    );
};

const handleOpenChallan = (item, navigation) => {
    console.log(item, navigation);
    navigation.navigate("singleChallan", { challanNo: item.challanNo,navigation });
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Adjust flex to accommodate DataTable properly
    },
    dataTableContainer: {
        flex: 1, // Ensure the DataTable takes up all available space within the container
        maxHeight:"80%"
    },
    rowContent: {
        flexDirection: 'row', // Ensure content is laid out horizontally
        alignItems: 'center', // Align content vertically in the center
        justifyContent: 'space-between', // Distribute content evenly along the row
    },
});

export default Challan;
