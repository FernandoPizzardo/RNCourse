import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";
1;

export default function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        onChangeText={props.onChangeText}
        style={styles.textInput}
      />
      <Pressable style={styles.buttonInput} onPress={props.onAddGoal}>
        <Text style={styles.textButton}>Add</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    width: "70%",
    marginRight: 8,
    flex: 1,
    padding: 8,
  },
  buttonInput: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#9156FF",

    borderRadius: 4,
    elevation: 3,
  },

  textButton: {
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
