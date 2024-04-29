import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { theme } from "src/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  iconName: any;
  variant?: boolean;
  onPress: () => void;
};

export function Button({ iconName, variant = false, onPress, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={variant ? styles.buttonVariant : styles.button}
      onPress={onPress}
      {...rest}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={variant ? 20 : 24}
        color={variant ? theme.colors.gray300 : theme.colors.gray100}
      />
    </TouchableOpacity>
  );
}
