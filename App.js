import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [goalOutputs, setGoalOutput] = useState([]);

  function startAddGoalVisible() {
    setmodalIsVisible(true);
  }

  function endAddGoalVisible() {
    setmodalIsVisible(false);
  }

  function addTextInput(enterTextInput) {
    setGoalOutput((currentGoalOutput) => [
      ...currentGoalOutput,
      { text: enterTextInput, id: Math.random().toString() },
    ]);
    endAddGoalVisible()
  }

  function deleteItemHand(id) {
    setGoalOutput((currentGoalOutput) => {
      return currentGoalOutput.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <Button
        title="Thêm mục tiêu"
        color="#d92b2b"
        onPress={startAddGoalVisible}
      />
      <GoalInput
        visible={modalIsVisible}
        addGoal={addTextInput}
        endGoal={endAddGoalVisible}
      />
      <View style={styles.goalOutput}>
        <Text style={styles.textGoal}>Mục tiêu của bạn là:...</Text>
        <FlatList
          data={goalOutputs}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteItemHand}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 25,
    backgroundColor: "#4cc9cbad",
  },
  goalOutput: {
    flex: 4,
  },
  textGoal:{
    paddingTop: 10
  }
});
