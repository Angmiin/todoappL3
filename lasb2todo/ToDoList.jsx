import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from "react-native";

const ToDoList = ({ tasks }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {tasks.map((task, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [styles.task, pressed && styles.completed]}
          >
            <Text style={styles.taskText}>{task}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
