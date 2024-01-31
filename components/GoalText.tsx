import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalText(props: any) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressable}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#9156FF",
    opacity: 0.8,
    elevation: 3,
    borderRadius: 10,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressable: {
    opacity: 0.5,
  },
});
