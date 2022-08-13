import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

// Function and Data
import { servicesDataType } from "../../data/dataTypes";

type Props = {
  data: servicesDataType;
};

const ServicesCard = ({ data }: Props) => {
  return (
    <SafeAreaView>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.section}>
            <View style={styles.imageSection}>
              <Image source={data.img} style={{ width: 28, height: 28 }} />
            </View>
            <View style={styles.main}>
              <View>
                <Text style={styles.header}>{data.title}</Text>
                <Paragraph style={styles.description}>
                  {data.description}
                </Paragraph>
              </View>
              <View>
                <FontAwesome name="long-arrow-right" size={24} color="#ccc" />
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default ServicesCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    paddingRight: 18,
    borderWidth: 1,
    elevation: 0,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  main: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageSection: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#53BED2",
    borderRadius: 4,
    marginRight: 12,
  },
  header: {
    fontWeight: "400",
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
});
