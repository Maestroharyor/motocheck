import React from "react";
import {
  Keyboard,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";

// Components
import HeaderComponent from "../components/shared/HeaderComponent";
import InputForm from "../components/home/InputForm";
import WelcomeSection from "../components/home/WelcomeSection";
import CheckListSection from "../components/home/CheckListSection";
import ServicesSection from "../components/home/ServicesSection";

// Datas and Functions
import { RootDrawerParamList } from "../data/dataTypes";

type HomeProps = DrawerScreenProps<RootDrawerParamList, "Home">;

const HomeScreen = ({ route, navigation }: HomeProps) => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor="#f9fafd" />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ScrollView style={styles.homeContainer}>
          <HeaderComponent route={route} navigation={navigation} />

          {/* Welcome Section */}
          <WelcomeSection />

          {/* Search Bar */}
          <InputForm />

          {/* Checklist Section */}
          <CheckListSection />

          {/* Services Section */}
          <ServicesSection />
        </ScrollView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    padding: 20,
  },
});
