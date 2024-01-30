
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), text: enteredGoal }
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          style={styles.textInput}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalList}>
        <FlatList
          data={courseGoals}
          alwaysBounceHorizontal={false}
          renderItem={(itemData) => {
            return <View  style={styles.goalItem}>
              <Text style={goalText}>{itemData.item.text}</Text>
            </View>;
          }}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    flex: 1,
    padding: 8,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalList: {
    flex: 4,
    padding: 8,
  },
  goalText: {
    color: "white",
  },
  goalItem: {
    backgroundColor: "#234567",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
});
