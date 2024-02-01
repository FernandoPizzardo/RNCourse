import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { GoalInput, GoalText } from "./components";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  function callModal() {
    setIsAddMode(true);
  }

  function closeModal() {
    setIsAddMode(false);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), text: enteredGoalText },
    ]);
    closeModal();
  }
  function removeGoalHandler(goalId: number) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" onPress={callModal} color="#9156FF" />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={isAddMode}
          onCancel={closeModal}
        />
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
    </>
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
