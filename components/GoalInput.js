import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
function GoalInput(props) {
  const [enterTextInput, setEnterTextInput] = useState("");

  function goalHandInput(enterTextInput) {
    setEnterTextInput(enterTextInput);
  }

  function addTextInput() {
    props.addGoal(enterTextInput);
    setEnterTextInput("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.viewInput}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Hãy nhập mục tiêu của bạn"
          onChangeText={goalHandInput}
          value={enterTextInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              style={styles.buttonInput}
              title="Thêm"
              onPress={addTextInput}
              color="#0080ff"
            />
          </View>
          <View style={styles.button}>
            <Button
              style={styles.buttonInput}
              title="Hủy"
              onPress={props.endGoal}
              color="#fd0000"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 8,
    padding: 16,
    marginRight: 8,
    width: "90%",
    opacity: 0.8,
  },
  buttonInput: {
    width: "20%",
  },
  viewInput: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#cb8d3756'
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button:{
    width: 100,
    marginHorizontal: 20,
  },
  image:{
    height: 100,
    width: 100,
    marginBottom: 10,
  }
});
