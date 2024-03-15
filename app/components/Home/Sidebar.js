// Sidebar.js
import React from "react";
import { Drawer, Menu, Divider } from "react-native-paper";

const Sidebar = ({ isDrawerOpen, setIsDrawerOpen }) => {
    const [visible, setVisible] = isDrawerOpen;

    const openMenu = () => setIsDrawerOpen(true);
  
    const closeMenu = () => setIsDrawerOpen(false);
    return (
        <PaperProvider>
        <View
          style={{
            paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            >
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
        </View>
      </PaperProvider>
    );
};

export default Sidebar; // Make sure to export the Sidebar component
