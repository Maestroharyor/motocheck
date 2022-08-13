import React from "react";
import { StyleSheet, View } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";

// Datas and Functions
import { RootDrawerParamList } from "../../data/dataTypes";

type HomeProps = DrawerScreenProps<RootDrawerParamList, "Home">;

const HeaderComponent = ({ route, navigation }: HomeProps) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <View>
          <FontAwesome name="align-left" size={23} color={"#67c5d7"} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.userButton}>
          <FontAwesome name="user" size={18} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menu: {},
  userButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#333",
    shadowOffset: { width: 2, height: 2 },
  },
});
