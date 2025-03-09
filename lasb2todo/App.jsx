/**
 * My To Do List App
 *
 * @format
 */

import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  return (
    <SafeAreaView style={styles.conatiner}>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
