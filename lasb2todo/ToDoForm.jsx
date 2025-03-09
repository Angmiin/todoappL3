import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

const ToDoForm = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const addText = () => {
    if (text.trim()) {
      // adding the new task to the list
      setTasks([...tasks, text]);
      setText("");
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholder="Add a new task..."
      />
      <Button title="Add" onPress={addText} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 40,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
export default ToDoForm;
