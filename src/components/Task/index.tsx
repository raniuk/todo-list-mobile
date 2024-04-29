import { Text, View } from "react-native";

import { Button } from "@components/Button";
import { Checkbox } from "@components/Checkbox";
import { TaskDto } from "@dtos/taskDto";

import { styles } from "./styles";

type TasksProps = TaskDto & {
  onTaskDone: (id: string) => void;
  onTaskDeleted: (id: string) => void;
};

export function Task({
  id,
  content,
  isCompleted,
  onTaskDone,
  onTaskDeleted,
}: TasksProps) {
  return (
    <View style={styles.container}>
      <Checkbox onPress={() => onTaskDone(id)} isCompleted={isCompleted} />

      <View style={styles.text}>
        <Text style={isCompleted ? styles.textDone : styles.textCreated}>
          {content}
        </Text>
      </View>

      <Button
        iconName="trash-can-outline"
        variant
        onPress={() => onTaskDeleted(id)}
      />
    </View>
  );
}
