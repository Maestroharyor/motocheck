import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

// Functions and Data
import { checkListDataType } from "../../data/dataTypes";

type Props = {
  data: checkListDataType;
};

const ChecklistCard = ({ data }: Props) => {
  return (
    <SafeAreaView>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.section1}>
            <View style={styles.sectionHeader}>
              <Text>{data.title}</Text>
              <View
                style={{
                  ...styles.status,
                  backgroundColor: data.pending
                    ? "rgba(220, 44, 16, 0.06)"
                    : "rgba(51, 204, 102, 0.1)",
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    color: data.pending ? "#DC2C10" : "#33CC66",
                  }}
                >
                  {data.pending ? "Pending" : "Ready"}
                </Text>
              </View>
            </View>
            <Paragraph style={styles.paragraph}>{data.description}</Paragraph>
          </View>
          <View style={styles.section2}>
            <Ionicons
              name="time-outline"
              size={17}
              color="#ccc"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.time}>{data.time}</Text>
          </View>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

export default ChecklistCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  section1: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  user: {
    fontSize: 15,
    fontWeight: "400",
  },
  status: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
  },
  paragraph: {
    color: "#999999",
    fontSize: 13,
  },
  section2: {
    paddingTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    fontSize: 13,
  },
});
