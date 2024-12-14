import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  function deleteItemHand() {
    props.onDeleteItem(props.id);
  }

  return (
    <View style={styles.goalInput}>
      <Pressable
        android_ripple={{ color: "#c9c6c6" }}
        onPress={deleteItemHand}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalInput: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#165eca",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
