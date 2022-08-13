import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Image } from "react-native";
import { Avatar } from "react-native-paper";

type Props = {
  drawerProps: DrawerContentComponentProps;
};

const SideDrawer = (props: Props) => {
  return (
    <View style={styles.drawerContainer}>
      <View>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <View>
          <View style={styles.menu1}>
            <Image
              source={require("../../assets/drawerIcons/pie-chart.png")}
              style={styles.menuIcon}
            />
            <Text>Overview</Text>
          </View>
          <View style={styles.menu}>
            <Image
              source={require("../../assets/drawerIcons/terminal.png")}
              style={styles.menuIcon}
            />
            <Text>Inspection</Text>
          </View>
          <View style={styles.menu}>
            <Image
              source={require("../../assets/drawerIcons/notification.png")}
              style={styles.menuIcon}
            />
            <Text>Notifications</Text>
          </View>
          <View style={styles.menu}>
            <Image
              source={require("../../assets/drawerIcons/data.png")}
              style={styles.menuIcon}
            />
            <Text>Maintenance</Text>
          </View>
          <View style={styles.menu}>
            <Image
              source={require("../../assets/drawerIcons/credit-card.png")}
              style={styles.menuIcon}
            />
            <Text>Payment Wallet</Text>
          </View>
          <View style={styles.menu}>
            <Image
              source={require("../../assets/drawerIcons/bar-chart.png")}
              style={styles.menuIcon}
            />
            <Text>History</Text>
          </View>
          <View style={styles.menu}>
            <Image
              source={require("../../assets/drawerIcons/exit.png")}
              style={styles.menuIcon}
            />
            <Text style={styles.logOut}>Log out</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Avatar.Image
          size={60}
          source={require("../../assets/avatar.png")}
          style={styles.avatar}
        />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "400", marginBottom: 5 }}>
            Faith Auto’s
          </Text>
          <Text style={{ fontSize: 13, fontWeight: "300", color: "#999" }}>
            Auto Centre
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SideDrawer;

const styles = StyleSheet.create({
  drawerContainer: {
    paddingHorizontal: 25,
    paddingVertical: 35,
    justifyContent: "space-between",
    height: "100%",
  },
  logo: {
    width: 147.34,
    height: 32,
    marginBottom: 30,
  },
  menu1: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E6EBEC",
    flexDirection: "row",
    alignItems: "center",
  },
  menu: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  logOut: {
    color: "#999999",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    marginRight: 15,
  },
});
