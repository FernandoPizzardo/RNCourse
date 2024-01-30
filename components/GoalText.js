import { StyleSheet, Text, View } from "react-native";

export default function GoalText(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    margin: 8,
    backgroundColor: "#9156FF",
    elevation: 3,
    borderRadius: 10,
  },
  goalText: {
    color: "white",
  },
});
