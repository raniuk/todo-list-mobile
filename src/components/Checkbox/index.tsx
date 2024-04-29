import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { theme } from "src/theme";

import { Octicons } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  isCompleted?: boolean;
  onPress: () => void;
};

export function Checkbox({ isCompleted = false, onPress, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} {...rest}>
      <Octicons
        name={isCompleted ? "check-circle" : "circle"}
        size={24}
        color={isCompleted ? theme.colors.purple : theme.colors.blue}
      />
    </TouchableOpacity>
  );
}
