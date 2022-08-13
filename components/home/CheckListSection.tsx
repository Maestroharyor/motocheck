import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// Components
import ChecklistCard from "../partials/ChecklistCard";

// Functions and Data
import { checkListData } from "../../data/data";

type Props = {};

const CheckListSection = (props: Props) => {
  return (
    <View>
      <View style={styles.headers}>
        <Text style={styles.checklist}>Recent Checklist</Text>
        <TouchableOpacity>
          <View>
            <Text style={styles.view_all}>View all</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        {checkListData.map((checklist) => (
          <ChecklistCard key={checklist.id} data={checklist} />
        ))}
      </View>
    </View>
  );
};

export default CheckListSection;

const styles = StyleSheet.create({
  headers: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
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
