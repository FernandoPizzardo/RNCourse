import { useState } from "react";
import { StyleSheet, View, FlatList, Pressable, Text } from "react-native";
import { GoalInput, GoalText } from "./components";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  function callModal() {
    setIsAddMode(true);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), text: enteredGoalText },
    ]);
  }
  function removeGoalHandler(goalId: number) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Pressable style={styles.callModal} onPress={callModal}>
        <Text>Course Goals</Text>
      </Pressable>
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} />
      <View style={styles.goalList}>
        <FlatList
          data={courseGoals}
          alwaysBounceHorizontal={false}
          renderItem={(itemData) => {
            return (
              <GoalText
                text={itemData.item.text}
                id={itemData.item.key}
                onDeleteItem={removeGoalHandler}
              />
            );
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
  callModal: {
    padding: 8,
    backgroundColor: "#9156FF",
    borderRadius: 16,
    elevation: 3,
    alignItems: "center",
    width: 100,
    justifyContent: "center",
  },
});
