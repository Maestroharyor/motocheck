import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import ServicesCard from "../partials/ServicesCard";
import { servicesData } from "../../data/data";

type Props = {};

const ServicesSection = (props: Props) => {
  return (
    <View style={styles.services}>
      <View style={styles.headers}>
        <Text style={styles.checklist}>Services</Text>
        <TouchableOpacity>
          <View>
            <Text style={styles.view_all}>View all</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        {servicesData.map((service) => (
          <ServicesCard key={service.id} data={service} />
        ))}
      </View>
    </View>
  );
};

export default ServicesSection;

const styles = StyleSheet.create({
  services: {
    marginBottom: 60,
  },
  headers: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  checklist: {
    fontWeight: "600",
    fontSize: 20,
  },
  view_all: {
    fontSize: 14,
    color: "#53BED2",
  },
});
