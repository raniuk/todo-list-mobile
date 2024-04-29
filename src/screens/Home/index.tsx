import { useRef, useState } from "react";
import { Alert, FlatList, Text, TextInput, View } from "react-native";
import uuid from "react-native-uuid";

import { Button } from "@components/Button";
import { Empty } from "@components/Empty";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Task } from "@components/Task";
import { TaskDto } from "@dtos/taskDto";

import { styles } from "./styles";

export function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<TaskDto[]>([]);

  const newTaskInputRef = useRef<TextInput>(null);

  function handleTaskAdd() {
    const taskContent = newTask.trim();
    if (taskContent.length >= 5) {
      setTasks((tasks) => [
        ...tasks,
        { id: uuid.v4().toString(), isCompleted: false, content: taskContent },
      ]);

      setNewTask("");

      newTaskInputRef.current?.blur();
    } else {
      Alert.alert("Alert", "Enter a new task, with at least 5 characters");
    }
  }

  function handleAddTask(id: string) {
    setTasks((task) =>
      task.map((task) => {
        task.id === id ? (task.isCompleted = !task.isCompleted) : null;
        return task;
      })
    );
  }

  function handleDeleteTask(id: string) {
    Alert.alert("Confirm", "Do you want to exclude that task?", [
      {
        text: "Yes",
        onPress: () =>
          setTasks((tasks) => tasks.filter((task) => task.id !== id)),
      },
      {
        text: "No",
      },
    ]);
  }

  const totalTasksCreated = tasks.length;
  const totalTasksCompleted = tasks.filter((task) => task.isCompleted).length;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.form}>
          <Input
            value={newTask}
            inputRef={newTaskInputRef}
            onChangeText={setNewTask}
            onSubmitEditing={handleTaskAdd}
            placeholder="Add new task"
          />
          <Button onPress={handleTaskAdd} iconName={"plus-circle-outline"} />
        </View>
        <View style={styles.tasksContainer}>
          <View style={styles.info}>
            <View style={styles.row}>
              <Text style={styles.tasksCreated}>Created</Text>
              <View style={styles.counterContainer}>
                <Text style={styles.counterText}>{totalTasksCreated}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.tasksDone}>Completed</Text>
              <View style={styles.counterContainer}>
                <Text style={styles.counterText}>{totalTasksCompleted}</Text>
              </View>
            </View>
          </View>

          <FlatList
            data={tasks}
            keyExtractor={(tasks) => tasks.id}
            renderItem={({ item }) => (
              <Task
                key={item.id}
                onTaskDone={() => handleAddTask(item.id)}
                onTaskDeleted={() => handleDeleteTask(item.id)}
                {...item}
              />
            )}
            ListEmptyComponent={<Empty />}
          />
        </View>
      </View>
    </View>
  );
}
