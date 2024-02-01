import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Modal,
  Image,
} from "react-native";

export default function GoalInput(props: any) {
  const [enteredGoal, setEnteredGoal] = useState("");
  function goalInputHandler(enteredText: string) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  }
  return (
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.titleImage}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          style={styles.textInput}
          value={enteredGoal}
        />

        <View style={styles.buttons}>
          <Pressable style={styles.buttonInput} onPress={addGoalHandler}>
            <Image
              source={require("../assets/images/plus.png")}
              style={styles.imagePlus}
            />
          </Pressable>
          <Pressable style={styles.buttonCancel} onPress={props.onCancel}>
            <Image
              source={require("../assets/images/plus.png")}
              style={styles.imageCancel}
            />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 10,
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 16,
  },
  buttonInput: {
    paddingVertical: 8,
    alignContent: "center",
    paddingHorizontal: 8,
    backgroundColor: "#9156FF",
    opacity: 0.7,
    borderRadius: 30,
    elevation: 6,
  },

  textButton: {
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 16,
  },
  imagePlus: {
    width: 30,
    height: 30,
  },
  imageCancel: {
    width: 30,
    height: 30,
    transform: [{ rotate: "45deg" }],
  },
  titleImage: {
    width: 100,
    height: 100,
  },
  buttonCancel: {
    paddingVertical: 8,
    alignContent: "center",
    paddingHorizontal: 8,
    backgroundColor: "#f31282",
    opacity: 0.7,
    borderRadius: 30,
    elevation: 6,
  },
});
