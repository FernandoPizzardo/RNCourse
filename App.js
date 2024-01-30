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
import GoalText from "./components/GoalText";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), text: enteredGoal },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onChangeText={goalInputHandler} onAddGoal={addGoalHandler} />
      <View style={styles.goalList}>
        <FlatList
          data={courseGoals}
          alwaysBounceHorizontal={false}
          renderItem={(itemData) => {
            return <GoalText text={itemData.item.text} />;
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
  goalList: {
    flex: 4,
    padding: 8,
  },
});
